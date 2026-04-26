import { useState,useEffect } from "react";
import TodoItem from "./todoItem8"; 
import styles from "./Todo.module.css";
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
    const addbtn = () => {
        if(text.trim() === "")return;
        setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
        setText("");
    }
    const textfun = (e) => {     
        if(e.key === "Enter"){
        if(e.nativeEvent.isComposing)return;
        if(text.trim() === "")return;
        setTodo([...todos,{id:Date.now(),text:text,done:false,priority:priority,deadline:deadline}]);
        setText("");}}
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Todo</h1>
            <div className={styles.inputArea}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {textfun(e)}} />
            <input type="text" value={search} placeholder="検索" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className={styles.addbtn} onClick={() => addbtn()}>追加</button>
            <div className={styles.buttons}>
            <button onClick={() => setfilter("all")}>全て</button>
            <button onClick={() => setfilter("complete")}>完了</button>
            <button onClick={() => setfilter("incomplete")}>未完了</button>
            <button onClick={() => setTodo(deletecomp)}>完了タスク削除</button>
            </div>
            <div className={styles.counter}>
            <p>全て:{total}</p>
            <p>完了:{comp}</p>
            <p>未完了:{incomp}</p>
            </div>
            <div className={styles.controls}>
            <select className={styles.select} value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">高</option>
                <option value="middle">中</option>
                <option value="low">低</option>
            </select>
            <input type="date" className={styles.date} value={deadline} onChange={(e) => setdeadline(e.target.value)}/>
            </div>
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