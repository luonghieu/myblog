import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@Layouts/BaseLayout'
import UserRoute from './modules/user'
import AuthRoute from './modules/auth'
import { setDocumentTitle, domTitle } from '@Utils/domUtil'
import { get } from 'lodash'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: BaseLayout,
    children: [
      {
        path: '/',
        name: 'top',
        component: () => import('@Views/Top.vue')
      },
      AuthRoute,
      UserRoute
    ]
  }
  // ,
  // {
  //   path: '*',
  //   redirect: '/404'
  // },
  // {
  //   path: '/404',
  //   component: () => import('@Views/error/404')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ y: 0 }),
  routes
})

function nextFactory (context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  for (let i = 0; i < to.matched.length; i++) {
    const toTmp = to.matched[i]
    if (toTmp.meta.middleware) {
      const middleware = Array.isArray(toTmp.meta.middleware)
        ? toTmp.meta.middleware
        : [toTmp.meta.middleware]
      const context = {
        from,
        next,
        router,
        to
      }
      const nextMiddleware = nextFactory(context, middleware, 1)
      return middleware[0]({ ...context, next: nextMiddleware })
    }
  }
  return next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length

    to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }

  next()
})

/**
 * History push.
 *
 * @param location
 * @returns {Promise<Route>}
 */
const push = (location) => {
  return router.push(location)
}

/**
 * History replace.
 *
 * @param location
 * @returns {Promise<Route>}
 */
const replace = (location) => {
  return router.replace(location)
}

/**
 * Get current route data.
 *
 * @param key
 * @returns {*}
 */
const currentRoute = (key = null) => {
  return key ? get(router, `history.current.${key}`) : get(router, 'history.current', {})
}

export {
  push,
  replace,
  currentRoute,
  router as default
}
