// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg1">
        <h1 className="head">
          The button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>

        <p className="para">Click the button to increase the count</p>
        <button onClick={this.onIncrement} className="btn1" type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
