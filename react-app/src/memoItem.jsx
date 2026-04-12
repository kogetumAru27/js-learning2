function MemoItem({item,deleteMemo}){
    return(
    <div>
        <p style={{color:"red"}}>{item.text}</p>
         <button onClick={() => deleteMemo(item.id)}>削除</button>
    </div>
    )
   
}
export default MemoItem;