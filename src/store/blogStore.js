var state = {
  blogs: [{
    title: 'SomeBlog',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem qui quisquam ducimus enim quas, eos, provident magni illo magnam obcaecati, iste unde minima sint reprehenderit sed. Ratione nihil, ex?',
    author: 'SomeGuy'
  }]
  }

let store = {
  methods:{
    getBlogs() {
      return state.blogs
    },
    addBlog(blog) {
      if (!blog || !blog.title || !blog.body || !blog.author) { return }
      state.blogs.push(blog)
    }
  }
}
export { store }