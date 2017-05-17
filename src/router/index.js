import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'
import NewBlog from '@/components/NewBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/new-blog',
      name: 'NewBlog',
      components: NewBlog

    }
  ]
})
