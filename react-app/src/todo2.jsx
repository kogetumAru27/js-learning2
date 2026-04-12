import {useState}from"react";
function Todo(){
    const [todos,setTodo] = useState([]);
    const [text,setText] = useState("");
    return(
        <div>
            <h1>Todo</h1>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <div>
                <button onClick={() => {
                    setTodo([...todos,{text:text,id:Date.now(),done:false}])
                    setText("");
                }}>追加</button>
                
                    {todos.map(todo => (
                        <div key={todo.id}>
                            <p style={{textDecoration:todo.done? "line-through":"none"}}>{todo.text}</p>
                            <button onClick={() => {
                                setTodo(todos.map(t => (
                                    t.id === todo.id?{...t,done:!t.done}:t   
                                )));
                            }}>{todo.done?"未完了に戻す":"完了"}</button>
                            <button onClick={() => {
                                setTodo(todos.filter(t => {
                                    return t.id !== todo.id
                                }));
                            }}>削除</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Todo;