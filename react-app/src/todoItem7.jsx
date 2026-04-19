import style from "./TodoItem.module.css";
function TodoItem({todo,filtered,complete,handleText,handleSave,editId,editText,setEdittext}){
    const today = new Date().toISOString().split("T")[0];
    const isOver = todo.deadline && todo.deadline < today;
    const color = isOver?"red":todo.priority === "high"?"red":todo.priority === "middle"?"orange":"blue";
    const CLASS = {
        item: style.item,
        text:`${style.text} ${todo.done ? style.done : ""} ${isOver ? style.over : ""}`,
        btn: style.btn
      };
    
 return(
    <div className={CLASS.item}>
        {editId === todo.id?(
        <div>
            <input className= {CLASS.text} type="text"value={editText} onChange={(e) => setEdittext(e.target.value)} />
            <button className= {CLASS.btn} onClick={() => handleSave(todo.id)}>保存</button>
        </div>
        ):(
            <p className={CLASS.text} style={{color:color}}><span>{todo.text}</span></p>
        )}
        <button className= {CLASS.btn} onClick={() => complete(todo.id)}>{todo.done?"未完了に戻す":"完了"}</button>
        <button className= {CLASS.btn} onClick={() => filtered(todo.id)}>削除</button>
        <button className= {CLASS.btn} onClick={() => handleText(todo.id,todo.text)}>編集</button>
    </div>
 )
}
export default TodoItem;