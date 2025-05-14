import { Card, CardContent, CardHeader } from '~/common/components/ui/card';
import { cn } from '~/lib/utils';
import {
  CalendarIcon,
  MapPinIcon,
  CircleCheckBig,
  CircleArrowOutUpLeft,
  Hash,
} from 'lucide-react';
import { Badge } from '~/common/components/ui/badge';
import type { DateRange } from 'react-day-picker';
import { DateTime } from 'luxon';
export interface DashboardProjectCardData {
  name: string;
  type: string;
  location: string;
  leaderEngineerName: string;
  dateRange: DateRange;
  processBadge: string;
}

export default function DashboardProjectCard({
  name,
  type,
  location,
  leaderEngineerName,
  dateRange,
  processBadge,
}: DashboardProjectCardData) {
  return (
    <Card className='p-4 border'>
      <CardHeader className='p-0'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-semibold'>{name}</span>
        </div>
      </CardHeader>
      <CardContent className='p-0 space-y-2 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2'>
          <Badge variant='default'>
            <Hash className='text-green-500 dark:text-green-300' />
            <span>{type}</span>
          </Badge>
        </div>
        <div className='flex items-center gap-2'>
          <MapPinIcon className='w-4 h-4' />
          <span>주소 : {location}</span>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-4 h-4' />
            {dateRange.from &&
              DateTime.fromJSDate(dateRange.from).toLocaleString(
                DateTime.DATE_SHORT,
              )}
            ~
            {dateRange.to &&
              DateTime.fromJSDate(dateRange.to).toLocaleString(
                DateTime.DATE_SHORT,
              )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
