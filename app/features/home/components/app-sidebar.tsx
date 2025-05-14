import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/common/components/ui/sidebar';
import { Link } from 'react-router';
import { ArrowUpCircleIcon } from 'lucide-react';
import { NavMain } from './sidebar/nav-main';
import { sidebarMenuMain } from './sidebar/sidebar-menu';
import { NavUser } from './sidebar/nav-user';
import { Calendar, Home, Inbox, Search, Settings, LayoutDashboard } from 'lucide-react';

const data = {
  user: {
    name: '홍길동',
    email: 'hong@gmail.com',
  },
  navMain: [
    {
      title: 'Home',
      url: '/test',
      icon: Home,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: Inbox,
        },
        {
          title: 'test2',
          url: '/test2',
          icon: Search,
        },
      ],
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      items: [
        {
          title: 'test3',
          url: '/test3',
          icon: Search,
        },
      ],
    },
    {
      title: 'test4',
      url: '/test4',
      icon: Search,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      items: [
        {
          title: 'test3',
          url: '/test3',
          icon: Search,
        },
      ],
    },
  ],
};

export function loader() {
  return { menus: sidebarMenuMain };
}

// export async function loader() {
//   const res = await fetch('/api/menus');
//   const menus = await res.json();
//   return { menus };
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <Link to='/'>
                <ArrowUpCircleIcon className='h-5 w-5' />
                <span className='text-base font-semibold'>A+CM 건축사사무소</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
