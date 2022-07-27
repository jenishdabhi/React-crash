// import React, { Component } from "react";
// import "./App.css";

// import logo from './logo.svg';
// import MyGreet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/hello";
// import Message from "./components/Message";
// import Funclick from "./components/Funclick";
// import Classclick from "./components/Classclick";
// import Counter from "./components/counter";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import Usergreeting from "./components/Usergreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Form from "./components/Form";
// import LifeCycleA from "./components/LifeCycleA";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import ClassCounterOne from "./components/ClassCounterOne";
// import ClassMouse from "./components/ClassMouse";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import IntervalClassCounter from "./components/IntervalClassCounter";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//         {/* <IntervalClassCounter/> */}
//         {/* <MouseContainer/> */}
//         {/* <HookMouse /> */}
//         {/* <ClassMouse/> */}
//         {/* <ClassCounterOne/> */}
//         {/* <HookCounterTwo/> */}
//         {/* <HookCounter/> */}
//         {/* <ClassCounter/> */}
//         {/* <LifeCycleA /> */}
//         {/* <Form/> */}
//         {/* <Stylesheet primary={true}/> */}
//         {/* <NameList/> */}
//         {/* <ParentComponent/> */}
//         {/* <Usergreeting/> */}
//         {/* <EventBind/> */}
//         {/* <MyGreet/>
//         <Welcome/>
//         <Hello/> */}
//         {/* <Message/> */}
//         {/* <Welcome name="boby" heroName="superman"/> */}
//         {/* <MyGreet name="job" heroName="batman"/> */}
//         {/* <Counter/> */}
//         {/* <Funclick/> */}
//         {/* <Classclick/> */}
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import "./App.css";
import ComponentC from "./hookscomponent/ComponentC";
import CounterOne from "./hookscomponent/CounterOne";
import CounterTwo from "./hookscomponent/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <CounterTwo/>
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={"jenish"}>
        <ChannelContext.Provider value={"Code"}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
