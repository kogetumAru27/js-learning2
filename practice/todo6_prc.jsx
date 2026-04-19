import { useState } from "react";
import TodoItem from "../react-app/src/todoItem5";
function Todoprc(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [filter,setfilter] = useState("all");
    const [editId,setEditId] = useState(null);
    const [editText,setEdittext] = useState("");
    const [deadline,setdeadline] = useState("");
    const [priority,setPriority] = useState("high")
    const searchWord = todos
    .filter(to => to.text.includes(search))
    .filter(to => {
        if(filter === "all")return true;
        if(filter === "complete")return to.done;
        if(filter === "incomplete")return !to.done;
    });
    const handleText = (id,text) => {setEdittext(text);setEditId(id)}
    const handleSave = (id) => {
        setTodo(todos.map(to => {to.id === id?{...to,text:editText}:to}))
        setEditId(null);

    } 
    const filtered = (id) => setTodo(todos.filter(to => to.id !== id));
    const complete = (id) => setTodo(todos.map(to => (to.id === id?{...to,done:!to.done}:to)));
    const total = todos.length;
    const comp = todos.filter(to => to.done).length;
    const incomp = total- comp;
    const deletcomp = todos.filter(to => !to.done);
    return(
        <div>
            <h1>todo</h1>
            <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)} 
            onKeyDown={(e) => {
                if(e.key === "enter"){
                    if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:done,deadline:deadline,priority:priority}])
                setText("");
                }
            }}
            />
            <input type="text"value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:done,deadline:deadline,priority:priority}])
                setText("");
            }}>追加</button>
            <button onClick={() => setfilter("all")}>全て</button>
            <button onClick={() => setfilter("complete")}>完了</button>
            <button onClick={() => setfilter("incomplete")}>未完了</button>
            <select  value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">高</option>
                <option value="middle">中</option>
                <option value="low">低</option>
            </select>
            <input type="date" value={deadline} onChange={(e) => setdeadline(e.target.value)} />
            <button onClick={() => setTodo(deletcomp)}>完了タスク削除</button>
            {searchWord.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                filtered={filtered}
                complete={complete}
                editId={editId}
                editText={editText}
                setEdittext={setEdittext}
                handleSave={handleSave}
                handleText={handleText}
                />
            ))}

        </div>
    )
}