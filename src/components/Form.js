import React, { Component } from 'react'

    class Form extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             userName:'',
             Comment: '',
             Topic: 'react'
          }
        }
        handleUsername=(event)=>{
            this.setState({
                userName: event.target.value   
            })
        }
        handleComments=event=>{
            this.setState({
                Comment: event.target.value
            })
        }
        HandleTopic=event=>{
            this.setState({
                Topic: event.target.Topic
            })
        }
        handleSubmit=event=>{
            alert(`${this.state.userName} ${this.state.Comment} ${this.state.Topic}`)
        }
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>User Name</label>
            <input type="text" value={this.state.userName} onChange={this.handleUsername}/>
        </div>
        <div>
        <label>Comments</label>
            <input value={this.state.Comment} onChange={this.handleComments}/>
        </div>
        <div>
            <select value={this.state.Topic} onChange={this.HandleTopic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select><br/>
            <button type='submifefset'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
