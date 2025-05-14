import { Calendar, Home, Inbox, Search, Settings, LayoutDashboard } from 'lucide-react';

export const sidebarMenuMain = [
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
];

