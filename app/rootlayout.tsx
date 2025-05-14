import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './common/components/ui/sidebar';
import { AppSidebar } from './common/components/sidebar/app-sidebar';

export default function RootLayout() {
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
