export default {
  home: '/',
  about: '/about-dan',
  articles: '/articles-and-presentations',
  single_page: (uid: string) => `/${uid}`,
  portfolio_page: (uid: string) => `/portfolio/${uid}`
}
