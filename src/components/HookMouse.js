import React,{useEffect,useState} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousepositon=e=>{
        console.log("Mouse Effect");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mousemove',logMousepositon)
    },[])
  return (
    <div>
      Hooks X - {x} Y- {y}
    </div>
  )
}

export default HookMouse
