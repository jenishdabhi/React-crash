import React from "react"

// function Greet (){
//   return <h1>hello jenish</h1>
// }
 const Greet = (props) =>{
    console.log(props);
return   (
        <div>
            <h1>hello {props.name} aka {props.heroName}</h1>
            <h2>{props.childres}</h2>
            
        </div>
 )

}
export default Greet

