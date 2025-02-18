import { useState } from "react"
import './form.css'
const Form=({todos,setTodos})=>{
    const[todo,setTodo]=useState({
        name:"",
        done:false
    })
    const handelSubmit=(e)=>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
       
    }
    return(
       
        <form className="todoform" onSubmit={handelSubmit}>
        <div className="cont">
        <input 
        className="moderInput"
        type='text' 
        value={todo.name} 
        placeholder="Enter Todo item...."
        onChange={(e)=>setTodo({name:e.target.value,done:false})}/>
        <button 
        className='btn' 
        type='submit'>Add</button>
         </div>
    </form>
       
    )
}
export default Form