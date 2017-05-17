var state = {
  blogs: [{
    title: 'SomeBlog',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem qui quisquam ducimus enim quas, eos, provident magni illo magnam obcaecati, iste unde minima sint reprehenderit sed. Ratione nihil, ex?',
    author: 'SomeGuy'
  },{
    title: 'TestBlog',
    body: 'THINGS ARE GOOD HERE AND WE LOVE VUE SO MUCH UFN',
    author: "SomeOtherGuy"
  }
  ]
  }

let store = {
  methods:{
    getBlogs() {
      return state.blogs
    },
    addBlog(blog) {
      if (!blog || !blog.title || !blog.body || !blog.author) { return }
      state.blogs.push(blog)
    },
    getBlogByTitle(title){
      for (var i = 0; i < state.blogs.length; i++) {
        var blog = state.blogs[i];
        if(blog.title == title){
          return blog
        }
      }
    }
  }
}
export { store }