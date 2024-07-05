import { useState } from "react"
import './form.css'
const Form=({todos,setTodos})=>{
    const[todo,setTodo]=useState("")
    const handelSubmit=(e)=>{
    
    
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo(" ")
       
    }
    return(
       
        <form className="todoform" onSubmit={handelSubmit}>
        <div className="cont">
        <input 
        className="moderInput"
        type='text' 
        value={todo} 
        placeholder="Enter Todo item...."
        onChange={(e)=>setTodo(e.target.value)}/>
        <button 
        className='btn' 
        type='submit'>Add</button>
         </div>
    </form>
       
    )
}
export default Form