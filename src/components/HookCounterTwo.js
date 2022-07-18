import React,{useState} from 'react'

function HookCounterTwo() {
    const initialvalue=0
    const [count,setCount]=useState(initialvalue)
  return (
    <div>
        Count: {count} <br/>
            <button onClick={()=>setCount(initialvalue)}>InitialValue</button>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo
