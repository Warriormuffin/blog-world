<template>
  <div class="new-blog">
    <div>
      <router-link to="/">Back to Home</router-link>
    </div>
    <input type = "text" v-model="title" placeholder="Title">
     <input type = "text" v-model='body' placeholder="Add Your Blog">
      <input type = "text" v-model='author' placeholder= 'Author Name'>
    <button @click=addBlog>Add Your Blog</button>
  </div>
</template>

<script>
  import { store } from '../store/blog-store'
  export default {
    name: 'NewBlog',
    data() {
      return {
        blogs: store.methods.getBlogs(),
        title: '',
        body: '',
        author: ''
      }
    },
    methods: {
      addBlog() {
        store.methods.adBlog({title: this.title, body: this.body, author: this.author})
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>