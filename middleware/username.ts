export default defineNuxtRouteMiddleware((to) => {
  const username = window.localStorage.getItem('username')
  if (!username && to.path !== '/login') {
    return navigateTo('/login')
  } else if (username && to.path === '/login') {
    return navigateTo('/')
  }
})
