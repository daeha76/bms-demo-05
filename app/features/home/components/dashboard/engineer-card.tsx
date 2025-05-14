import { Card, CardContent, CardHeader } from '~/common/components/ui/card';
import { cn } from '~/lib/utils';
import {
  CalendarIcon,
  MapPinIcon,
  CircleCheckBig,
  CircleArrowOutUpLeft,
} from 'lucide-react';
import { Badge } from '~/common/components/ui/badge';

export interface DashboardEngineerCardData {
  name: string;
  job: string;
  location: string;
  project?: string;
  date: string;
  badge: string;
}

export default function DashboardEngineerCard({
  name,
  job,
  location,
  project,
  date,
  badge,
}: DashboardEngineerCardData) {
  return (
    <Card
      className={cn(
        'p-4 border',
        badge === '입사'
          ? 'border-green-500 dark:border-green-500/30'
          : 'border-orange-500 dark:border-orange-500/30',
      )}
    >
      <CardHeader className='p-0'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-semibold'>{name}</span>
          <span className='text-sm text-muted-foreground'>{job}</span>
        </div>
      </CardHeader>
      <CardContent className='p-0 space-y-2 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2'>
          <MapPinIcon className='w-4 h-4' />
          {badge === '퇴사' ? (
            <span>현장 : {project ?? '대기'}</span>
          ) : (
            <span>주소 : {location}</span>
          )}
        </div>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-4 h-4' />
            {date}
          </div>
          <Badge variant='default'>
            {badge === '입사' ? (
              <>
                <CircleCheckBig className='text-green-500 dark:text-green-300' />
                입사
              </>
            ) : (
              <>
                <CircleArrowOutUpLeft className='text-red-500 dark:text-red-300' />
                퇴사
              </>
            )}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
