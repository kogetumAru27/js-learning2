import styles from "./Stargame.module.css";
function GameStatus({count,timer}){
    return(
        <div className={styles.status}>
            <p className={styles.time}>time:⏳{timer}</p>
            <p className={styles.count}>score:⭐️{count}</p>
        </div>

    )
}
export default GameStatus;