import React, { Component } from 'react'

export class Classclick extends Component {
    clickHandler(){
        console.log('Clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked Me</button>
      </div>
    )
  }
}

export default Classclick
