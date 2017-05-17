<template>
  <div class="new-blog">
    <div>
      <router-link to="/"><button>Back Home</button></router-link>
    </div>
    <br>
     <input type = "text" v-model="title" placeholder="Title">
     <input type = "text-form" v-model='body' placeholder="Add Your Blog">
     <input type = "text" v-model='author' placeholder= 'Author Name'>
    <button @click='addBlog'>Add Your Blog</button>
  </div>
</template>

<script>
  import { store } from '../store/blogStore'
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
a {
  color: #42b983;
}

button{
  color: #42b983;
}

</style>