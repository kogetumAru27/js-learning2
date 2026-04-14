import { useState } from "react";
import TodoItem from "./todoItem5";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [editText,setEdittext] = useState("");
    const [editId,setEditId] = useState(null);
    const [filter,setfilter] = useState("all");
    const [priority,setPriority] = useState("high");
    const [deadline,setdeadline] = useState("");
    const searchEdit = todos
        .filter(to => (to.text.includes(search)))
        .filter(to => {
            if(filter === "all")return true;
            if(filter === "complete")return to.done;
            if(filter === "incomplete")return !to.done;
        });
    const complete = (id) => setTodo(todos.map(to => (to.id === id?{...to,done:!to.done}:to)));
    const Delete = (id) => setTodo(todos.filter(to => (to.id !== id)));
    const handleText = (id,text) => {
        setEdittext(text);
        setEditId(id);
    }
    const handleSave = (id) => {
        setTodo(todos.map(to => (to.id === id?{...to,text:editText}:to)));
        setEditId(null);
    }
    //全ての数
    const total = todos.length;
    // 完了の数（filterで done:true のものだけ取り出して長さを数える）
    const comp = todos.filter(to => to.done).length;
    const incomp = total - comp;
    const compdelete = todos.filter(to => !to.done);
    return(
        <div>
            <h1>todo</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
            onKeyDown={(e) => {
                if(e.nativeEvent.isComposing)return;
                if(e.key === "Enter"){
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");
            }}} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");
            }}>追加</button>
            <input type="text" value={search} onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <input type="date"value={deadline} onChange={(e) => setdeadline(e.target.value)} />
            <button onClick={() => setTodo(compdelete)}>完了タスク削除</button>
            <button onClick={() => setfilter("all")}>全て</button>
            <button onClick={() => setfilter("complete")}>完了</button>
            <button onClick={() => setfilter("incomplete")}>未完了</button>
            <p>全て:{total}</p>
            <p>完了:{comp}</p>
            <p>未完了:{incomp}</p>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high" >高</option>
                <option value="middle">中</option>
                <option value="low" >低</option>
            </select>
            {searchEdit.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                complete={complete}
                Delete={Delete}
                editId={editId}
                editText={editText}
                setEdittext={setEdittext}
                handleText={handleText}
                handleSave={handleSave}
                />
            ))}
        </div>
    )
}
export default Todo;