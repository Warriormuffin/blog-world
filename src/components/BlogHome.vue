<template>
  <div class="blog-home">
   <div class="row">
    <h1><img src="./../assets/logo.png">ue Blogs</h1>
    <router-link to="/new-blog"><button>New Blog</button></router-link>
      <div>
      <br>
        <ul v-for="blog in blogs">
          <!--This is crazy but follow this pattern for future projects allows you to pass data like {{}} but in a url-->
          <router-link  :to="{name: 'Blog', params: {title: blog.title}}"><li>{{blog.author}} : {{blog.title}}</li></router-link>
          <!--VERY IMPORTANT ABOVE-->
        </ul>
      </div>
   </div>
  </div>

</template>

<script>
import {store} from '../store/blogStore'
export default {
  name: 'BlogHome',
  data () {
    return {
      blogs: store.methods.getBlogs()
      }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img{
  width: 37px;
  height: 40px;
}
</style>
