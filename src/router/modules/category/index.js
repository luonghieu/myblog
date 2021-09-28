const EmptyLayout = {
  template: '<router-view/>'
}

export default {
  path: 'category',
  component: EmptyLayout,
  children: [
    {
      path: 'detail/:catId',
      name: 'category.detail',
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
