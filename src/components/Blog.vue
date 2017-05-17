<template>
 <div class="blog">
  <div>
    <h1>{{$route.params.title}}</h1>
    <p></p>
  </div>
 </div>
</template>

<script>
import {store} from '../store/blogStore'
  export default {
    name: 'blog',
    data (){
      return{
      }
    }
  }

</script>

<style lang="">

</style>