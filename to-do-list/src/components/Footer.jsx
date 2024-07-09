import React from "react";
import './todolist.css'
const Footer=({todos})=>{
 const TotalNumberOfTask=todos.length
 const completed=todos.filter((todo)=>todo.done==true).length
 
    return(
        <div className="footer">
        <span>Comeleted Todos: {completed}</span>
        <span>Total Task: {TotalNumberOfTask}</span>
        </div>
    )
}
export default Footer