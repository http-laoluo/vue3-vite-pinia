
import router from '@/router/index'
import { getToken } from '@/utils/auth' 
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // next({ path: '/' })
        next()
    } else {
        next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      //  next(`/login?redirect=${to.path}`)
      next()
    }
  }
})

router.afterEach(() => {

})
