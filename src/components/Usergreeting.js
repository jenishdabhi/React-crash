import React, { Component } from 'react'
import Welcome from './Welcome'

export class Usergreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: false
    }
  }
  
  render() {
    let message
    if(this.state.isLoggedin){
      message = <div>welcome Me</div>
    }
    else{
      message = <div>welcome Guest</div>
    }
    return<div>{message}</div>
    // return (
    //   <div>
    //     <div>welcome Me</div>
    //     <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default Usergreeting
