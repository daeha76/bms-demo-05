import { Outlet } from 'react-router';
import { AppSidebar } from '~/features/home/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '~/common/components/ui/sidebar';

export default function HomeLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
