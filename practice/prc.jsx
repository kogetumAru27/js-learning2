import { useState } from "react";
import TodoItem from "./todoItem5";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [search,setSearch] = useState("");
    const [editText,setEdittext] = useState("");
    const [editId,setEditId] = useState(null);
    const handleSave = (id) => {
        setTodo(todos.map(to => (to.id === id)?{...to,text:editText}:to))//saveボタンが押されたらこれ
        setEditId(null)//何も選ばれてない状態にする
    }
    const handleEdit = (id,text) => {
        setEdittext(text);
        setEditId(id)
    }
}