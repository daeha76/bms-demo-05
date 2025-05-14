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
import { Search, LayoutDashboard, Users, Map } from 'lucide-react';

const data = {
  user: {
    name: '홍길동',
    email: 'hong@gmail.com',
  },
  navMain: [
    {
      title: '기술인관리',
      url: '#',
      icon: Users,
      items: [
        {
          title: '기술인 현황',
          url: '/engineers',
        },
        {
          title: '교육관리',
          url: '/engineers/education',
        },
      ],
    },
    {
      title: '프로젝트 관리',
      url: '#',
      icon: Map,
      items: [
        {
          title: '프로젝트 현황',
          url: '/projects',
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
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <Link to='/'>
                <ArrowUpCircleIcon className='h-5 w-5' />
                <span className='text-base font-semibold'>
                  A+CM 건축사사무소
                </span>
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
