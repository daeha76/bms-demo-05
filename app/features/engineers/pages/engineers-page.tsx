import { useState, type Dispatch, type SetStateAction } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { Separator } from '~/common/components/ui/separator';
import {
  CalendarIcon,
  MapPinIcon,
  CircleCheckBig,
  CircleArrowOutUpLeft,
  Phone,
  CalendarDays,
} from 'lucide-react';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/common/components/ui/sheet';

interface Engineer {
  id: string;
  name: string;
  position: string;
  birthday: string;
  email: string;
  phone: string;
  address?: string;
  job: string;
}

const engineers: Engineer[] = [
  {
    id: '1',
    name: '도해준',
    position: '상무',
    birthday: '1980-01-01',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '전라남도 나주시',
    job: '건축/특급',
  },
  {
    id: '2',
    name: '주미영',
    position: '부장',
    birthday: '1983-11-11',
    email: 'jouled@example.com',
    phone: '123-333-2220',
    address: '서울특별시 은평구',
    job: '토목/고급',
  },
  {
    id: '3',
    name: '김영호',
    position: '이사',
    birthday: '1972-05-07',
    email: 'kim@example.com',
    phone: '123-444-3330',
    address: '경기도 성남시',
    job: '건축/특급',
  },
  {
    id: '4',
    name: '이영호',
    position: '주임',
    birthday: '1965-10-11',
    email: 'lee@example.com',
    phone: '123-777-3333',
    address: '경기도 연천군',
    job: '조경/초급',
  },
  {
    id: '5',
    name: '강윤진',
    position: '대리',
    birthday: '1995-02-20',
    email: 'kang@example.com',
    phone: '123-000-2252',
    address: '강원특별자치도 춘천시',
    job: '토목/특급',
  },
];

function RenderEngineerCards({
  engineer,
  setSelectedEngineer,
  setActiveSheet,
}: {
  engineer: Engineer;
  setSelectedEngineer: Dispatch<SetStateAction<Engineer | null>>;
  setActiveSheet: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <Card
      key={engineer.id}
      className='cursor-pointer hover:border-primary transition-colors'
      onClick={() => {
        setSelectedEngineer(prev =>
          prev?.id === engineer.id ? null : engineer,
        );
        setActiveSheet('editor');
      }}
    >
      <div className='w-[410px] flex flex-row gap-5'>
        <CardHeader className='w-[160px]'>
          <div className='flex flex-col gap-4 items-center justify-between'>
            <div className='flex items-center gap-2'>
              <CardTitle className='text-2xl'>{engineer.name}</CardTitle>
              <p className='text-sm text-muted-foreground'>
                {engineer.position}
              </p>
            </div>
            <p className='text-lg font-bold text-muted-foreground'>
              {engineer.job}
            </p>
          </div>
        </CardHeader>
        <CardDescription className='text-sm text-muted-foreground'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-1'>
                <CalendarDays className='w-4 h-4' />
                {engineer.birthday}
              </div>
              <div className='flex items-center gap-1'>
                <MapPinIcon className='w-4 h-4' />
                {engineer.address}
              </div>
              <div className='flex items-center gap-1'>
                <Phone className='w-4 h-4' />
                {engineer.phone}
              </div>
            </div>
          </div>
        </CardDescription>
      </div>
    </Card>
  );
}

export default function EngineersPage() {
  const [selectedEngineer, setSelectedEngineer] = useState<Engineer | null>(
    null,
  );
  const [activeSheet, setActiveSheet] = useState<string | null>(null);

  return (
    <Sheet>
      <div>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-row gap-2 p-2'>
            <SheetTrigger asChild>
              <Button
                variant='secondary'
                onClick={() => setActiveSheet('register')}
              >
                입사자 등록
              </Button>
            </SheetTrigger>
            <Input className='w-80' placeholder='이름' />
            <Input className='w-80' placeholder='직무분야' />
            <Input className='w-80' placeholder='등급' />
            <SheetTrigger asChild>
              <Button
                variant='secondary'
                onClick={() => setActiveSheet('search')}
              >
                검색
              </Button>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Button
                variant='secondary'
                onClick={() => setActiveSheet('reset')}
              >
                초기화
              </Button>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Button
                variant='secondary'
                onClick={() => setActiveSheet('advanced')}
              >
                상세 검색
              </Button>
            </SheetTrigger>
          </div>
        </div>
        <Separator />
        <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
          {selectedEngineer ? (
            <div className='flex gap-4 items-start px-4'>
              {/* 좌측 영역: 기술인 카드 리스트, 선택하면 세로 구분선과 상세 카드가 나오게게 */}
              <div className='space-y-4'>
                {engineers.map(engineer => (
                  <RenderEngineerCards
                    engineer={engineer}
                    setSelectedEngineer={setSelectedEngineer}
                    setActiveSheet={setActiveSheet}
                  />
                ))}
              </div>

              {/* 세로 구분선 */}
              <Separator
                orientation='vertical'
                className='h-auto self-stretch'
              />

              {/* 우측: 상세 카드 */}
              <div className='flex-1 space-y-4'>
                <Card>
                  <CardHeader>
                    <CardTitle>{selectedEngineer?.name}</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>
                      {selectedEngineer?.position}
                    </p>
                    <p className='text-sm'>추가 정보...</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4'>
              {engineers.map(engineer => (
                <RenderEngineerCards
                  engineer={engineer}
                  setSelectedEngineer={setSelectedEngineer}
                  setActiveSheet={setActiveSheet}
                />
              ))}
            </div>
          )}
          <SheetTrigger asChild>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4'>
              {engineers.map(engineer => (
                <RenderEngineerCards
                  engineer={engineer}
                  setSelectedEngineer={setSelectedEngineer}
                  setActiveSheet={setActiveSheet}
                />
              ))}
            </div>
          </SheetTrigger>
          <SheetContent>
            {activeSheet === 'register' && (
              <SheetHeader>
                <SheetTitle>입사자 등록</SheetTitle>
                <SheetDescription>
                  등록 폼 컴포넌트 혹은 입력 UI
                </SheetDescription>
              </SheetHeader>
            )}
            {activeSheet === 'search' && (
              <SheetHeader>
                <SheetTitle>검색</SheetTitle>
                <SheetDescription>검색 필터 입력</SheetDescription>
              </SheetHeader>
            )}
            {activeSheet === 'reset' && (
              <SheetHeader>
                <SheetTitle>초기화</SheetTitle>
                <SheetDescription>초기화 확인 또는 안내</SheetDescription>
              </SheetHeader>
            )}
            {activeSheet === 'advanced' && (
              <SheetHeader>
                <SheetTitle>상세 검색</SheetTitle>
                <SheetDescription>다양한 고급 검색 조건</SheetDescription>
              </SheetHeader>
            )}
            {activeSheet === 'editor' && (
              <SheetHeader>
                <SheetTitle>수정</SheetTitle>
                <SheetDescription>
                  수정 폼 컴포넌트 혹은 입력 UI
                </SheetDescription>
              </SheetHeader>
            )}
          </SheetContent>
          <Separator />
          <div>tabs</div>
        </div>
      </div>
    </Sheet>
  );
}
