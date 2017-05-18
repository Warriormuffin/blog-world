<template>
  <div id="app">
    <div class="container">
      <router-view name="navbar"></router-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'
import NewBlog from '@/components/NewBlog'
import NavBar from '@/components/NavBar'

export default {
  name: 'app'
}
  components: {
    BlogHome,
    Blog,
    NewBlog,
    NavBar
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
