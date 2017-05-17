<template>
 <div class="blog">
  <div>
    <h1>{{$route.params.title}}</h1>
    <p>{{this.blog.body}}</p>
    <p>{{this.blog.author}}</p>
  </div>
 </div>
</template>

<script>
import {store} from '../store/blogStore'
  export default {
    name: 'blog',
    data (){
      return{
        blog: {},
        title: this.$route.params.title
      }
    },
    mounted: function(){
      this.blog = store.methods.getBlogByTitle(this.title)
    }
  }

</script>

<style lang="">

</style>