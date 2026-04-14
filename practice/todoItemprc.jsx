function TodoItemprc(){
    return(
        <div>
          {editId === Todo.id?(<div>
            <input type="text"value={editText} onChange={(e) => seteditText(e.target.value)} />
            <button onClick={() => handleSave(Todo.id)}>編集</button>
          </div>):(
            <p style={{textDecoration:todo.done?"line-through":"none"}}>{todo.text}</p>
          )} 
          <button onClick={() => handleedit(todo.id,todo.text)}>編集</button>
        </div>
    )
}