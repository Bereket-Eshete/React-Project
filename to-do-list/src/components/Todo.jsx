import React, { useState } from 'react'
import Todoitem from './Todoitem'

const Todo=()=> {
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState([])
    const handelSubmit=(e)=>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo(" ")
       
    }
  return (
    <div>
    <form onSubmit={handelSubmit}>
        <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
    
    
    {todos.map((item)=>(<Todoitem item={item} key={item}/>))}
   
     
    </div>
  )
}

export default Todo