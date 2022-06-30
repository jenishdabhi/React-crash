import React from "react";

const hello=()=>{
    //with JSX
    // return(                  
    //     <div>
    //         <h1>Hello JSX</h1>
    //     </div>
    // )

    //Withou JSX

    return React.createElement('div',null,'Hello JSX')
}
export default hello