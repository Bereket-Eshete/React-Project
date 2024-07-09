import React from 'react'
import './toiteam.css'
const Todoitem=({item,todos,setTodos})=> {
  const handelDelete=(item)=>{
   console.log("delete button clicked for",item)
   setTodos( todos.filter((todo)=> todo !== item));
  }
  const handelstrike =(name)=>{
  setTodos(todos.map((todo)=>todo.name === name?{...todo,done:!todo.done}:todo))
  }
  const id=item.done?'done':''
  return (
     <div className='head'>
      <div className='item1' >
        <span className={id} onClick={()=>handelstrike(item.name)}>{item.name}</span>
      <span>
      <button onClick={()=>handelDelete(item)} className='btn1'>x</button>
      </span>
      </div>
      <hr className='line'/>
     </div>
  )
}

export default Todoitem