import {useState} from "react";
import TodoItem from "./todoItem4";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [editId,seteditId] =useState(null);//idのコピーtodoのものは変えたくないから
    const [editText,setEdittext] =useState("");//textのコピー上に同じ
    const complete = (id) => setTodo(todos.map(to => (to.id === id?{...to,done:!to.done}:to)));
    const filtered = (id) => setTodo(todos.filter(to => (to.id !== id)));
    const searchWord = todos.filter(to => (to.text.includes(search)));
    const handleEdit = (id,text) => {seteditId(id);setEdittext(text);}
    const handleSave = (id) => {
        setTodo(todos.map(to => (to.id === id ? {...to, text: editText} : to)));
        seteditId(null);
    }
    console.log(editId,editText)
    return(
        <div>
            <h1>todo</h1>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={() => {
                if(text.trim() === "")return;
                setTodo([...todos,{id: Date.now(),text:text,done:false}]);
                setText("");
            }}>追加</button>
            <input type="text" value={search} placeholder="検索" onChange={(e) => {
                setSearch(e.target.value);
            }}/>
            {searchWord.map(todo => (
                
                    <TodoItem 
                    key={todo.id}
                    todo={todo}
                    complete={complete}
                    filtered={filtered}
                    handleEdit={handleEdit}
                    editId={editId}
                    editText={editText}
                    setEdittext = {setEdittext}
                    handleSave={handleSave}
                    />
               
            ))}
            
        </div>
    )
}
export default Todo;