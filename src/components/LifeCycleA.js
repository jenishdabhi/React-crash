import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Jenish'
      }
      console.log('LifcycleA constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getderivedstateFromProps');
        return null
    }

    componentDidMount(){
        console.log("lifeCycleA component did Mount");
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
    <div>
        <div>LifeCycle A</div>
        <LifeCycleB/>
    </div>
    )
  }
}

export default LifeCycleA
