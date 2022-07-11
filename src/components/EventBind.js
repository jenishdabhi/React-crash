import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message: 'GoodBye!'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clicked</button> */}
        <button onClick={()=>this.clickHandler()}>Click</button> { /*Aproach 2*/} 
      </div>
    )
  }
}

export default EventBind
