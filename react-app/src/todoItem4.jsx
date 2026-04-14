function TodoItem({todo,complete,filtered,handleEdit,editId, editText, setEdittext,handleSave}){
    const color = todo.priority === "high"?"red":todo.priority === "middle"?"blue":"orange"
    return(
        <div>
           {editId === todo.id?(<div>
            <input type="text" value={editText} onChange={(e) => setEdittext(e.target.value)} />
            <button onClick={() => handleSave(todo.id)}>保存</button>
           </div>):(
            <p style={{textDecoration: todo.done? "line-through":"none",color:color}}>{todo.text}</p>
           )}
            <button onClick ={()=> {complete(todo.id)}}>{todo.done?"未完了に戻す":"完了"}</button>
            <button onClick={() => {filtered(todo.id)}}>削除</button>
            <button onClick={() => {handleEdit(todo.id,todo.text)}}>編集</button>
        </div>
    )
}
export default TodoItem;