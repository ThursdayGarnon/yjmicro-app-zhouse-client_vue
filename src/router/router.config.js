/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: () => import('@/views/layouts/index'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import('@/views/home/index'),
  //       meta: { title: '首页', keepAlive: false }
  //     },
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import('@/views/home/about'),
  //       meta: { title: '关于我', keepAlive: false }
  //     }
  //   ]
  // },
  {
    path: "/uchome/home",
    name: "uchome_Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "home" */ "../views/uchome/Home.vue")
  }
]
