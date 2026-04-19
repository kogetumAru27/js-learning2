function TodoItemprc({todo,filtered,complete,editId,editText,setEdittext,handleSave, handleText}){
    const today = new Date().toISOString().split("T")[0];
    const isOver = todo.deadline && todo.deadline  < today
    const color = isOver?"red":todo.priority === "high"?"red":todo.priority === "middle"?"orange":"blue";
    return(
        <div>
            {editId === todo.id?(
                <div>
                <input type="text" value={editText} onChange={(e) => setEdittext(e.target.value)} />
                <button onClick={() => handleSave(todo.id)}>保存</button>
                </div>
            ):(
                <p style={{textDecoration:todo.done?"line-through":"none",color:color}}>{todo.text}</p>
            )}
            <button  onClick={() => complete(todo.id)}>{todo.done?"未完了に戻す":"完了"}</button>
            <button onClick={() => filtered(todo.id)}>削除</button>
            <button onClick={() => handleText(todo.id,todo.text)}>編集</button>


        </div>
        
    )
}