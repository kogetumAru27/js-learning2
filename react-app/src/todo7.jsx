import { useState,useEffect } from "react";
import TodoItem from "./todoItem7";
function Todo(){
    const [todos,settodo] = useState(() => {
        const save = localStorage.getItem("todos");
        return save? JSON.parse(save):[]
    });
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [editId,setEditId] = useState(null);
    const [editText,setEdittext] = useState("");
    const [deadline,setdeadline] = useState("");
    const [priority,setPriority] =useState("high");
    const [filter,setfilter] = useState("all");
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
    const filtered = (id) => settodo(todos.filter(to => to.id !== id));
    const complete = (id) => settodo(todos.map(to => (to.id === id?{...to,done:!to.done}:to)));
    const priorityWeight = {
        high:1,
        middle:2,
        low:3
     }
     const searchWord = todos
    .filter(to => to.text.includes(search))
    .filter(to => {
        if(filter === "all")return true;
        if(filter === "complete")return to.done;
        if(filter === "incomplete")return !to.done
    })
    .sort((a,b) => {
        // 壁1: 期限の有無チェック
        if(!a.deadline)return 1;
        if(!b.deadline)return -1;
        // 壁2: 期限が「違う」場合だけ、期限で順序を決める
        if(a.deadline !== b.deadline)return a.deadline > b.deadline?1:-1;
        // 壁3: 期限が「同じ」なら、
        return priorityWeight[a.priority] - priorityWeight[b.priority];
    })
    const handleText = (id,text) => {
        setEdittext(text);
        setEditId(id);
    }
    const handleSave = (id) => {
        settodo(todos.map(to => to.id === id?{...to,text:editText}:to))
        setEditId(null);
    } 
    const total = todos.length;
    const comp = todos.filter(to => to.done).length;
    const incomp = total - comp;
    const deletecomp = todos.filter(to => !to.done);
    return(
        <div>
            <h1>Todo</h1>
        <input type="text" value={text} 
        onChange={(e) => setText(e.target.value)} 
        onKeyDown={(e) => {
            if(e.key === "Enter"){
            if (e.nativeEvent.isComposing) return;
            if(text.trim() === "")return;
            settodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
            setText("");
            }
        }}/>
        <button onClick={() => {
            if(text.trim() === "")return;
            settodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
            setText("");
        }}>追加</button>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">高</option>
            <option value="middle">中</option>
            <option value="low">低</option>
        </select>
        <button onClick={() => setfilter("all")}>全て</button>
        <button onClick={() => setfilter("complete")}>完了</button>
        <button onClick={() => setfilter("incomplete")}>未完了</button>
        <button onClick={() => settodo(deletecomp)}>完了削除</button>
        <p>全て:{total}</p>
        <p>完了:{comp}</p>
        <p>未完了:{incomp}</p>
        <input type="date"value={deadline} onChange={(e) => setdeadline(e.target.value)}/>
        {searchWord.map(todo => (
            <TodoItem 
            key = {todo.id}
            todo ={todo}
            filtered ={filtered}
            complete = {complete}
            handleText = {handleText}
            handleSave = {handleSave}
            editId = {editId}
            editText = {editText}
            setEdittext = {setEdittext}
            />
        ))}
        </div>
        
    )
}
export default Todo;