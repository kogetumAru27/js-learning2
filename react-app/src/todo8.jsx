import { useState,useEffect } from "react";
import TodoItem from "./todoItem8";
function Todo(){
    const [todos,setTodo] = useState(() => {
        const save = localStorage.getItem("todos");
        return save? JSON.parse(save):[]
    });
    const [text,setText] =useState("");
    const [search,setSearch] =useState("");
    const [editId,setEditId] =useState(null);
    const [editText,setEdittext] =useState("");
    const [fillter,setfilter] = useState("all");
    const [priority,setPriority] = useState("high");
    const [deadline,setdeadline] =useState("");
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
    const handlepriority = {
        high:1,
        middle:2,
        low:3
    }
    //一つの要素の関数
    const filltered = (id) => setTodo(todos.filter(to => to.id !== id));
    const complete = (id) => setTodo(todos.map(to => to.id === id?{...to,done:!to.done}:to));
    const handleText = (id,text) => {
        setEdittext(text);
        setEditId(id);
    }
    const handleSave = (id) => {
        setTodo(todos.map(to => to.id === id?{...to,text:editText}:to));
        setEditId(null)
    }
    //要素外
    const searchWord = todos
    .filter(to => to.text.includes(search))
    .filter(to => {
        if(fillter === "all")return true;
        if(fillter === "complete")return to.done;
        if(fillter === "incomplete")return !to.done;
    })
    .sort((a,b) => {
        if(a.deadline)return 1;
        if(b.deadline)return -1;
        if(a.deadline !== b.deadline){
            return a.deadline > b.deadline?1:-1
        }
        return handlepriority[a.priority] - handlepriority[b.priority];
    });
    const total = todos.length;
    const comp = todos.filter(to => to.done).length;
    const incomp = total - comp;
    const deletecomp = todos.filter(to => !to.done);
    return(
        <div>
            <h1>Todo</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                if(e.key === "Enter"){
                if(e.nativeEvent.isComposing)return;
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");}
            }} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");
            }}>追加</button>
            <input type="text" value={search} placeholder="検索" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setfilter("all")}>全て</button>
            <button onClick={() => setfilter("complete")}>完了</button>
            <button onClick={() => setfilter("incomplete")}>未完了</button>
            <button onClick={() => setTodo(deletecomp)}>完了タスク削除</button>
            <p>全て:{total}</p>
            <p>完了:{comp}</p>
            <p>未完了:{incomp}</p>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">高</option>
                <option value="middle">中</option>
                <option value="low">低</option>
            </select>
            <input type="date" value={deadline} onChange={(e) => setdeadline(e.target.value)}/>
            {searchWord.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                filltered={filltered}
                complete={complete}
                handleText={handleText}
                handleSave={handleSave}
                editId={editId}
                editText={editText}
                setEdittext={setEdittext}
                />
            ))}
        </div>
    )
}
export default Todo;