import HomePage from './Home'
import AdminLogin from './Admin/Login'

const mainRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/admin',
    component: AdminLogin,
  },
]

export default mainRoutes
