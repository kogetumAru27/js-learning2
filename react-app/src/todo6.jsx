import { useState,useEffect } from "react";
import TodoItem from "./todoItem6";
function Todo(){
    const [todos,setTodo] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : []; // 最初から中身を入れた状態でスタート！
    });
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [editText,setEdittext] = useState("");
    const [editId,setEditId] = useState(null);
    const [filter,setfilter] = useState("all");
    const [deadline,setdeadline] =useState("");
    const [priority,setPriority] = useState("high");
    const filtered = (id) => setTodo(todos.filter(to => (to.id !== id)));
    const complete = (id) => setTodo(todos.map(to => (to.id === id?{...to,done:!to.done}:to )));
    const searchWord = todos
        .filter(to => (to.text.includes(search)))
        .filter(to => {
            if(filter === "all")return true;
            if(filter === "complete")return to.done;
            if(filter === "incomplete")return !to.done;
        })
        .sort((a,b) => {
            if(!a.deadline)return 1;//一番後ろに行きたいから1 aに期限がないとき
            if(!b.deadline)return -1;//一番前に行きたいから−１ bに期限がないとき
            return a.deadline > b.deadline ? 1:-1;//両方に期限があるとき
        })
    const handleText = (id,text) => {
        setEditId(id);
        setEdittext(text);
    }
    const handleSave = (id) => {
        setTodo(todos.map(to => (to.id === id?{...to,text:editText}:to)))
        setEditId(null);}
    const total = todos.length;
    const  comp = todos.filter(to => to.done).length;
    const incomp = total - comp;
    const compdelete = todos.filter(to => !to.done);
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return(
        <div>
            <h1>todo</h1>
            <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)} 
            onKeyDown={(e) => {if(e.key === "Enter"){
                if(e.nativeEvent.isComposing)return;
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");
            }}}/>
            <input type="text" value={search} placeholder="検索" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
                setText("");
            }}>追加</button>
            <button onClick={() => setfilter("all")}>全て</button>
            <button onClick={() => setfilter("complete")}>完了</button>
            <button onClick={() => setfilter("incomplete")}>未完了</button>
            <p>全て:{total}</p>
            <p>完了:{comp}</p>
            <p>未完了:{incomp}</p>
            <select  value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">高</option>
                <option value="middle">中</option>
                <option value="low">低</option>
            </select>
            <input type="date" value={deadline} onChange={(e) => setdeadline(e.target.value)} />
            <button onClick={() => setTodo(compdelete)}>完了タスク削除</button>

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
export default Todo;