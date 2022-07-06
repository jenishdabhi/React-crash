import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>console.log('call Back Method',this.state.count)) //use this callback fun. as Second parameter
        console.log(this.state.count);
    }
    
  render() {
    return (
      <div>
        <div>Count-{this.state.count}</div>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default counter
