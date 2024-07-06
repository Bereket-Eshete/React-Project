import React from 'react'
import './toiteam.css'
const Todoitem=({item,todos,setTodos})=> {
  const handelDelete=(item)=>{
   console.log("delete button clicked for",item)
   setTodos( todos.filter((todo)=> todo !== item));
  }
  return (
     <div className='head'>
      <div className='item1' >{item}
      <span>
      <button onClick={()=>handelDelete(item)} className='btn1'>x</button>
      </span>
      </div>
      
      <hr className='line'/>
     </div>
      
    
  )
}

export default Todoitem