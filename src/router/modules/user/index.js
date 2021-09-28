// import { trans } from '@I18n/i18n'
import { userRedirect } from '@Src/middleware/redirect'
import PostRoute from '@Router/modules/post'
import CategoryRoute from '@Router/modules/category'

export default {
  path: 'user',
  component: () => import('@Views/user/Base'),
  meta: {
    middleware: [userRedirect]
  },
  children: [
    {
      path: '',
      name: 'user.home',
      component: () => import('@Views/user/Home'),
      meta: {
        // title: trans('label.home'),
        title: 'label.home',
        showLogo: true,
        setting: true
      }
    },
    {
      path: 'about',
      name: 'user.about',
      component: () => import('@Views/user/About'),
      meta: {
        // title: trans('label.home'),
        title: 'label.about',
        showLogo: true,
        setting: true
      }
    },
    {
      path: 'works',
      name: 'user.works',
      component: () => import('@Views/user/Works'),
      meta: {
        // title: trans('label.home'),
        title: 'label.works',
        showLogo: true,
        setting: true
      }
    },
    {
      path: 'pages',
      name: 'user.pages',
      component: () => import('@Views/user/Pages'),
      meta: {
        // title: trans('label.home'),
        title: 'label.pages',
        showLogo: true,
        setting: true
      }
    },
    CategoryRoute,
    {
      path: 'post/detail/:postId',
      name: 'post.detail',
      component: () => import('@Views/user/Detail'),
      meta: {
        // title: trans('label.home'),
        title: 'label.detail',
        showLogo: true,
        setting: true
      }
    },
    {
      path: 'contact',
      name: 'user.contact',
      component: () => import('@Views/user/Contact'),
      meta: {
        // title: trans('label.home'),
        title: 'label.contact',
        showLogo: true,
        setting: true
      }
    }
  ]
}
