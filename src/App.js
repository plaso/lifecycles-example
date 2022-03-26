import { Component } from 'react';

import Counter from './components/Counter'
import Post from './components/Post';
import Posts from './components/Posts';
import UsersList from './components/UsersList';

class App extends Component {
  state = {
    showCounter: false
  }

  toggleCounter = () => {
    this.setState(prevState => ({ showCounter: !prevState.showCounter }))
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.toggleCounter}>Toggle counter</button>
        {this.state.showCounter && (
          <Counter />
        )}
        <UsersList /> */}

        {/* <Posts /> */}

        <Post />
      </div>
    );
  }
}

export default App;
