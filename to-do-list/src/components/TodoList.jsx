import Todoitem from "./Todoitem"
import './todolist.css'
const TodoList =({todos,setTodos})=>{
const sortedtodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
        <div className="list">
        {sortedtodos.map((item)=>(<Todoitem setTodos={setTodos} item={item} key={item.name} todos={todos} />))}
        </div>
    )
}
export default TodoList
