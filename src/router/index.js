import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'
import NewBlog from '@/components/NewBlog'
import NavBar from '@/components/NavBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      components: {
        default: BlogHome,
        navbar: NavBar
      }
    },
    {
      path: '/blog/:title',
      name: 'Blog',
      components: {
        default: Blog,
        navbar: NavBar
      },
      props: true
    },
    {
      path: '/new-blog',
      name: 'NewBlog',
      components: {
          default: NewBlog,
          navbar: NavBar
      }

    }
  ]
})
