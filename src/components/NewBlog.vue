<template>
  <div class="new-blog">
      <div>
        <input type = "text" v-model="title" placeholder="Blog Title">
      </div>
        <br>
        <br>
     <div>
        <textarea v-model='body' rows="10" cols="70"></textarea>
     </div>
        <br>
        <br>
     <input type = "text" v-model='author' placeholder= 'Author Name'>

    <router-link to="/"><button @click='addBlog'>Add Your Blog</button></router-link>
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
        store.methods.addBlog({title: this.title, body: this.body, author: this.author})
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