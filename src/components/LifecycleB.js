import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Jenish'
      }
      console.log('LifcycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getderivedstateFromProps');
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB component did Mount");
    }
    
  render() {
    console.log('LifeCycleB render')
    return (<div>LifeCycle B</div>)
  }
}

export default LifeCycleB
