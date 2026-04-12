function TodoItem({todo,onDone,onDelete}){
    return(
        <div>
            <p style={{textDecoration: todo.done?"line-through":"none"}}>{todo.text}</p>
            <button onClick={() => onDone(todo.id)}>{todo.done?"未完了に戻す":"完了"}</button>
            <button onClick={() => onDelete(todo.id)}>削除</button>
        </div>
    )
}
export default TodoItem;