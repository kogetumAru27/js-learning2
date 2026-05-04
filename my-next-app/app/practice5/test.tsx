"use client";
import { useState } from "react";

type Todo = {
    id: number;
    text: string;
}

export default function TodoList(){
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const filter = (id:number) => (todos.filter(to => to.id !== id));
    function handletodo(){
        setTodos([...todos,{id:Date.now(),text:text}])
    }
    return(
        <>
        <input type="text"value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handletodo}>追加</button>
        {todos.map(todo => (
            <div key={todo.id}>
                <p>{todo.text}</p>
                <button onClick={() => setTodos(filter(todo.id))}>削除</button>
            </div>
        ))}
        </>
    )
}
