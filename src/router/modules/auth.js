// import { trans } from '@I18n/i18n'
import AuthLayout from '@Layouts/AuthLayout'
import { authRedirect } from '@Src/middleware/redirect'

export default {
  path: 'auth',
  name: 'auth',
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'auth.login',
      component: () => import('@Views/Login/LoginPage.vue'),
      meta: {
        // title: trans('login.page_title'),
        title: 'login.page_title',
        middleware: [authRedirect]
      }
    },
  ]
}
