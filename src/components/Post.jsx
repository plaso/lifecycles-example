import { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      id: '',
      data: null,
      error: null
    }

    this.timeoutId = null
  }
  // state = {
  //   loading: false,
  //   id: '',
  //   data: null,
  //   error: null
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id && prevState.id !== this.state.id) {
      this.timeoutId = setTimeout(() => {
        // this.setState({ loading: true, error: false }, () => {
        //   this.fetchPost()
        // })

        // Loading && error
        this.setState({ loading: true, error: false }, () => {
          this.fetchPost()
        })
      }, 3000);
    }
  }

  handleChange = (e) => {
    clearTimeout(this.timeoutId)
    this.setState({ id: e.target.value })
  }

  fetchPost = () => {
    const { id } = this.state

    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          console.log(response.data)
          this.setState({ data: response.data, loading: false })
        })
        .catch(e => {
          if (e.response && e.response.status === 404) {
            this.setState({ error: 'Not found', data: null, loading: false })
          } else {
            this.setState({ error: 'An unexpected error ocurred', data: null, loading: false })
          }
        })
    }
  }

  render() {
    const { loading, id, data, error } = this.state



    return (
      <div>
        <h1>Post details</h1>

        <input value={id} onChange={this.handleChange} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          data && (
            <>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            </>
          )
        )}

        {error && (
          <p>{error}</p>
        )}
      </div>
    )
  }
}

export default Post