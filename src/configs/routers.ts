export const routers = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  account: '/account',
  new: '/new',
}

export const dynamicRouters = {
  caseDetail: (id: string) => `/products/${id}`,
}
