import {
  BriefcaseIcon,
  CheckCircle2Icon,
  CalendarIcon,
  MapPinIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  CircleCheckBig,
  CircleArrowOutUpLeft,
  User,
} from 'lucide-react';
import { DateTime } from 'luxon';
import type { DateRange } from 'react-day-picker';
import { Badge } from '~/common/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { cn } from '~/lib/utils';
import DashboardEngineerCard, {
  type DashboardEngineerCardData,
} from './engineer-card';

interface DashboardCardsProps {
  dateRange: DateRange;
}

const cards: DashboardEngineerCardData[] = [
  {
    name: '홍길동',
    job: '건축 / 특급',
    location: '서울특별시 양천구',
    date: '2025-05-16',
    badge: '입사',
  },
  {
    name: '김철수',
    job: '토목 / 특급',
    location: '경기도 남양주시',
    date: '2025-05-23',
    badge: '입사',
  },
  {
    name: '이명희',
    job: '조경 / 특급',
    location: '충청북도 청주시',
    date: '2025-05-16',
    badge: '퇴사',
  },
  {
    name: '박영희',
    job: '건축 / 특급',
    location: '서울특별시 강남구',
    date: '2025-05-15',
    badge: '입사',
  },
  {
    name: '최영수',
    job: '안전 / 특급',
    location: '경기도 파주시',
    project: '파주 아이파크 프로젝트',
    date: '2025-05-16',
    badge: '퇴사',
  },
  {
    name: '송주현',
    job: '건축 / 고급',
    location: '경상북도 경주시',
    date: '2025-05-22',
    badge: '퇴사',
  },
];

export function DashboardEngineerCards({ dateRange }: DashboardCardsProps) {
  const { from, to } = dateRange;

  const filteredCards = cards.filter(card => {
    const cardDate = DateTime.fromISO(card.date);
    return from && to && cardDate >= DateTime.fromJSDate(from);
  });

  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 flex items-center gap-2'>
        <User className='w-7 h-7 text-orange-500 dark:text-orange-300' />
        입퇴사 현황
      </h2>
      <div
        className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 
    @5xl/main:grid-cols-3 grid grid-cols-1 gap-4 px-0 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-0'
      >
        {filteredCards.map((card, idx) => (
          <DashboardEngineerCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
