import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import MyGreet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Funclick from "./components/Funclick";
import Classclick from "./components/Classclick";
import Counter from "./components/counter";
import EventBind from "./components/EventBind";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        {/* 
        <p>this is children props</p>
        <MyGreet name="bob" heroName="superman"/>
        <button>Action</button>
        <Welcome name="job" heroName="batman"/>
        
        <Hello/> */}
        {/* <Message/> */}
        {/* <Welcome name="boby" heroName="superman"/> */}
        {/* <MyGreet name="job" heroName="batman"/> */}
        {/* <Counter/> */}
        {/* <Funclick/> */}
        {/* <Classclick/> */}
      </div>
    );
  }
}

export default App;
