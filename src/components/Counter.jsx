import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.intervalId = null
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)

    console.log('didMount')
  }

  componentDidUpdate(prevProps, prevState) {

    console.log('didUpdate', { prevProps, prevState })
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)

    console.log('willUnmount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

export default Counter