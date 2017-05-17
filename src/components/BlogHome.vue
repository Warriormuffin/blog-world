<template>
  <div class="blog-home">
   <div class="row">
    <h1><img src="./../assets/logo.png">ue Blogs</h1>
    <button>New Blog</button>
      <div>
      <br>
        <ul v-for="blog in blogs">
          <li>{{blog.author}} : {{blog.title}}</li>
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
    }

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
  width: 30px;
}
</style>
