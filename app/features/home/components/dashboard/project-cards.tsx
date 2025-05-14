import { DateTime } from 'luxon';
import type { DateRange } from 'react-day-picker';
import DashboardProjectCard, {
  type DashboardProjectCardData,
} from './project-card';
import { Map } from 'lucide-react';

interface DashboardCardsProps {
  dateRange: DateRange;
}

const cards: DashboardProjectCardData[] = [
  {
    name: '파주 아이파크 프로젝트',
    type: '건설기술진흥법',
    location: '경기도 파주시',
    leaderEngineerName: '홍길동',
    dateRange: {
      from: new Date('2022-05-16'),
      to: new Date('2025-06-30'),
    },
    processBadge: '진행중',
  },
  {
    name: '청량리 아파트 신축공사',
    type: '주택법',
    location: '서울특별시 동대문구',
    leaderEngineerName: '최지수',
    dateRange: {
      from: new Date('2023-05-16'),
      to: new Date('2025-05-24'),
    },
    processBadge: '진행중',
  },
];

export function DashboardProjectCards({ dateRange }: DashboardCardsProps) {
  const { from, to } = dateRange;

  const filteredCards = cards.filter(card => {
    if (!from || !to || !card.dateRange?.from || !card.dateRange?.to)
      return false;

    const rangeFrom = DateTime.fromJSDate(from).toMillis();
    const rangeTo = DateTime.fromJSDate(to).toMillis();
    const cardFrom = DateTime.fromJSDate(card.dateRange.from).toMillis();
    const cardTo = DateTime.fromJSDate(card.dateRange.to).toMillis();

    return (
      (cardFrom <= rangeFrom && rangeFrom <= cardTo) ||
      (cardFrom <= rangeTo && rangeTo <= cardTo)
    );
  });

  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 flex items-center gap-2'>
        <Map className='w-7 h-7 text-orange-500 dark:text-orange-300' />
        프로젝트 계약 현황
      </h2>
      <div
        className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 
    @5xl/main:grid-cols-3 grid grid-cols-1 gap-4 px-0 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-0'
      >
        {filteredCards.map((card, idx) => (
          <DashboardProjectCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
