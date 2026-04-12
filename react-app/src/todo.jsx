import { useState } from "react";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [filter,setfilter] = useState("all");
    return(
        <div>
            <h1>Todo</h1>
            <input type="text" value={text} 
            onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                setTodo([...todos,{id: Date.now(),text: text,done: false}]);
                setText("");
            }}>追加</button>
            {todos.map(todo => (
                <div key={todo.id}>
                <p style={{textDecoration: todo.done? "line-through":"none"}}>{todo.text}</p>
                <button onClick={() => {
                 setTodo(
                    t.id === todo.id? {...t,done:!todo.done}:t
                 )
                }}>完了</button>
                <button onClick={() => {
                    setTodo(todos.filter(t => {
                         return t.id !== todo.id
                    }))
                }}>削除</button>
                </div>
            ))}
        </div>
    );
}
export default Todo;