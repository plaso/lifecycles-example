import { Component } from 'react'
import users from '../data.json'

class UsersList extends Component {
  state = {
    currentUser: null,
    id: null,
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ id: users[0].id, currentUser: users[0], loading: false })
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('-------------')
    console.log(prevState)
    console.log(this.state)

    if (prevState.id && this.state.id && prevState.id !== this.state.id) {
      // fetch new user

      this.setState({ loading: true }, () => {
        setTimeout(() => {
          this.setState({ currentUser: users.find(user => user.id === this.state.id), loading: false })
        }, 1000);
      })
    }
  }

  setUser = (id) => {
    this.setState({ id: id })
  }

  render() {
    const { loading, currentUser } = this.state

    return (
      <div>
        <h1>
          UserList
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            { users.map(user => (
              <button key={user.id} onClick={() => this.setUser(user.id)}>
                User {user.id}
              </button>
            )) }
    
            {currentUser && (
              <h2>Current user: {currentUser.name}</h2>
            )}
          </>
        )}
  
      </div>
    )
  }
}

export default UsersList