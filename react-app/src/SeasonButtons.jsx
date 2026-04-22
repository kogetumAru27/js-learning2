function Seasonbuttons({setSeason}){
    return(
        <div>
            <button onClick={() => setSeason("春")}>春</button>
            <button onClick={() => setSeason("夏")}>夏</button>
            <button onClick={() => setSeason("秋")}>秋</button>
            <button onClick={() => setSeason("冬")}>冬</button>
            <button onClick={() => setSeason("通年")}>通年</button>
        </div>
    )
}
export default Seasonbuttons;