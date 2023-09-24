// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerateButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">Generate a random number in range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.onGenerateButton}
          >
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
