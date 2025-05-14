import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  layout('rootlayout.tsx', [
    index('routes/home.tsx'),
    ...prefix('/test', [index('features/test/pages/test-page.tsx')]),
  ]),
] satisfies RouteConfig;
