import Todoitem from "./Todoitem"
import './todolist.css'
const TodoList =({todos,setTodos})=>{
    return(
        <div className="list">
        {todos.map((item)=>(<Todoitem setTodos={setTodos} item={item} key={item} todos={todos} />))}
        </div>
    )
}
export default TodoList