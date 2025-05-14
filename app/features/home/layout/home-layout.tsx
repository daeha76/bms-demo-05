import { Outlet } from 'react-router';
import { AppSidebar } from '~/features/home/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '~/common/components/ui/sidebar';
import { SiteHeader } from '~/features/home/components/sidebar/site-header';

export default function HomeLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 md:gap-6'>
              <Outlet />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
