import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import RiskProfile from '@/pages/RiskProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
<<<<<<< Updated upstream
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost,
=======
      path: '/risk_profile',
      name: 'RiskProfile',
      component: RiskProfile,
>>>>>>> Stashed changes
    },
  ],
})