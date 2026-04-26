import styles from "./Constellation.module.css"
function Seasonbuttons({setSeason}){
    return(
        <div className={styles.Seasonbuttonsbuttons}>
            <button className={styles.Seasonbutton} onClick={() => setSeason("春")}>春</button>
            <button className={styles.Seasonbutton} onClick={() => setSeason("夏")}>夏</button>
            <button className={styles.Seasonbutton} onClick={() => setSeason("秋")}>秋</button>
            <button className={styles.Seasonbutton} onClick={() => setSeason("冬")}>冬</button>
            <button className={styles.Seasonbutton} onClick={() => setSeason("通年")}>通年</button>
        </div>
    )
}
export default Seasonbuttons;