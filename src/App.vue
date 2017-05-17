<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'
import NewBlog from '@/components/NewBlog'

export default {
  name: 'app'
}
  components: {
    BlogHome,
    Blog,
    NewBlog
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
