import {useState} from "react";
import TodoItem from "./TodoItem2";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [search,setSearch] =useState("");
    const filtered = (id) => setTodo(todos.filter(t => (t.id !== id)));
    const complete = (id) => setTodo(todos.map(t => (t.id === id?{...t,done:!t.done}:t)));
    const searchTodo = todos.filter(tod => (tod.text.includes(search)));
    return(
        <div>
            <h1>Todo</h1>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id: Date.now(),text: text,done:false}]);
                setText("");
            }}>追加</button>
            <input type="text"value={search} placeholder="検索" onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <input type="text" value={edittext} onChange={(e) => {
                setEdittext(e.target.value);
            }} />
            {searchTodo.map(todo => (
                    <TodoItem
                    key = {todo.id}
                    todo = {todo}
                    filtered = {filtered}
                    complete = {complete}
                    />
            ))}
        </div>
        
    );
}
export default Todo;