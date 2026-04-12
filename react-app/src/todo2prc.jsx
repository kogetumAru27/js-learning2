import { useState } from "react";
import TodoItem from "./TodoItem";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [name,setName] = useState("");
    const handleDelete = (id) => {
        setTodo(todos.filter(t => (t.id !== id)))
    }
    const handleComp  = (id) => {
        setTodo(todos.map(t => (t.id === id?{...t,done:!t.done}:t)))
    }
        
    
    
    return(
        <div>
            <h1>Todo</h1>
            <input type="text"value={name} onChange={(e) => {
                setName(e.target.value);
            }}/>
            <button onClick={() => {
                if(name.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:name,done:false}]);
                setName("");
            }}>追加</button>
            {todos.map(todo => (
                <TodoItem 
                key = {todo.id}
                todo = {todo}
                onDone = {handleComp}
                onDelete = {handleDelete}
                />
            ))}
        </div>
    )
}
export default Todo;