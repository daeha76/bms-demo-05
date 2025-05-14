import { useEffect, useState } from 'react';
import { Calendar } from '~/common/components/ui/calendar';
import { Separator } from '~/common/components/ui/separator';
import { DateTime } from 'luxon';
import type { Route } from './+types/home-page';
import type { DateRange } from 'react-day-picker';
import { DashboardEngineerCards } from '../components/dashboard/engineer-cards';
import { DashboardProjectCards } from '../components/dashboard/project-cards';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Home | BMS' },
    { name: 'description', content: 'Home page' },
  ];
};

export default function HomePage() {
  const [dateToday, setDateToday] = useState<Date>(DateTime.now().toJSDate());
  const [dateRange, setDateRange] = useState<DateRange>({
    from: DateTime.fromJSDate(dateToday).startOf('week').toJSDate(),
    to: DateTime.fromJSDate(dateToday).endOf('week').toJSDate(),
  });
  useEffect(() => {
    setDateRange({
      from: DateTime.fromJSDate(dateToday).startOf('week').toJSDate(),
      to: DateTime.fromJSDate(dateToday).endOf('week').toJSDate(),
    });
  }, [dateToday]);

  return (
    <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
      <div className='flex gap-6 items-start px-4'>
        {/* 좌측 영역: 제목 + 카드 */}
        <div className='flex-1 space-y-4'>
          <div>
            <p className='text-lg font-bold text-muted-foreground'>
              {dateRange.from &&
                DateTime.fromJSDate(dateRange.from).toLocaleString(
                  DateTime.DATE_HUGE,
                )}{' '}
              ~{' '}
              {dateRange.to &&
                DateTime.fromJSDate(dateRange.to).toLocaleString(
                  DateTime.DATE_HUGE,
                )}
            </p>
          </div>
          <Separator />
          <DashboardEngineerCards dateRange={dateRange} />
          <Separator />
          <DashboardProjectCards dateRange={dateRange} />
          <Separator />
        </div>
        {/* 세로 구분선 */}
        <Separator orientation='vertical' className='h-auto self-stretch' />

        <div className='w-[250px] space-y-4'>
          <Calendar
            mode='single'
            selected={dateToday}
            onSelect={day => {
              if (day) {
                setDateToday(day);
              }
            }}
            className='rounded-md border'
          />
          <Separator />
        </div>
      </div>
    </div>
  );
}
