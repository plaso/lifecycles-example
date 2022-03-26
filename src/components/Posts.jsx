import { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      posts: []
    }

    this.debounce = null
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        this.setState({
          loading: false,
          posts: response.data
        })
      })
      .catch(err => console.err(err))
  }

  render() {
    const { loading, posts } = this.state

    return (
      <div>
        <h1>Posts</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    )
  }
}

export default Posts