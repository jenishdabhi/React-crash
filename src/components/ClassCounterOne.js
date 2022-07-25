import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props){
    super(props)
    this.state={
        count: 0,
        name: ''
    }
}
    componentDidMount(){
        document.title=`You clicked ${this.state.count} times`
    }
    componentDidUpdate(preProps,preState){
        if(preState.count!==this.state.count){
        console.log('Updating value');
        document.title= `You clicked ${this.state.count} times`
        }
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} 
        onChange={e=>{this.setState({name: e.target.value})}} />
        <button onClick={()=>this.setState({count: this.state.count + 1 })}>click {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne
