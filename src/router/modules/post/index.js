const EmptyLayout = {
  template: '<router-view/>'
}

export default {
  path: 'post',
  component: EmptyLayout,
  children: [
    {
      path: 'detail/:postId',
      name: 'post.detail',
      component: () => import('@Views/user/Detail'),
      meta: {
        // title: trans('label.home'),
        title: 'label.detail',
        showLogo: true,
        setting: true
      }
    }
  ]
}
