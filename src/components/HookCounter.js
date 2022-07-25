import React,{useState} from 'react'
import { useEffect } from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
      document.title=`You clicked ${count} times`
      console.log('Use Effect');
    },[count])

  return (
    <div>
      <input type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
      <button onClick={()=>setCount(count + 1)}>Count {count} times</button>
    </div>
  )
}

export default HookCounter
