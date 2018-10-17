import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

export default function (router) {
  router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    next()
  })

  router.afterEach(() => {
    NProgress.done() // finish progress bar
  })
}
