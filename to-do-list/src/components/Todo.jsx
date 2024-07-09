import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import Footer from './Footer'

const Todo=()=> { 
 const[todos,setTodos]=useState([])
  return (
    <div>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    <Footer todos={todos}/>
    </div>
  )
}

export default Todo