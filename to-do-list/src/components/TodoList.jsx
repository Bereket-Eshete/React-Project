import Todoitem from "./Todoitem"
const TodoList =({todos})=>{
    return(
        <>
        {todos.map((item)=>(<Todoitem item={item} key={item}/>))}
   
        </>
    )
}
export default TodoList