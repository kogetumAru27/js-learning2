function TodoItem({todo,complete,filtered,setEdittext,seteditId,text,}){
    return(
        <div>
            <p style={{textDecoration:todo.done?"line-through":"none"}}>{todo.text}</p>
            <button onClick={() => {complete(todo.id)}}>{todo.done?"未完了に戻す":"完了"}</button>
            <button onClick={() =>{filtered(todo.id)}}>削除</button>
        </div>
    );
}
export default TodoItem;
