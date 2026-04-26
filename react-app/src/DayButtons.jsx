import { changeWeathercode } from "./utlis";
import styles from"./Weather.module.css";
function DayButtons({setTargetdate,selectDate,weatherDate,targetDate,weeks}){
    return(
        <div>
            <div className={styles.btns}>
            <button className={`${styles.btn} ${targetDate === "今日" ? styles.btnActive : ""}`} onClick={() => setTargetdate("今日")}>今日</button>
            <button className={styles.btn} onClick={() => setTargetdate("明日")}>明日</button>
            <button className={styles.btn} onClick={() => setTargetdate("明後日")}>明後日</button>
            <button className={styles.btn} onClick={() => setTargetdate("一週間")}>一週間</button>
            </div>
            <div className={styles.hourlylist}>
            {weatherDate && targetDate !== "一週間" && weatherDate.hourly.time.map((time,i) => {
                if(time.split("T")[0] !== selectDate)return null
                    return(
                        <div key={time} className={styles.hourlyItem}>
                        <span >{time.split("T")[1]}</span>
                        <span>{changeWeathercode(weatherDate.hourly.weathercode[i])}</span>
                        <span>{weatherDate.hourly.temperature_2m[i]}</span>
                        </div>  
                    );
            })}
            </div>
            <div className={styles.hourlylist}>
            {weatherDate && targetDate === "一週間"?weeks.map(week => {
                const index = weatherDate.hourly.time.indexOf(week + "T12:00");
                if(index === -1)return null;
                return(
                <div key={week} className={styles.hourlyItem}>
                    <span>{week} 12:00</span>
                    <span>{changeWeathercode(weatherDate.hourly.weathercode[index])}</span>
                    <span>{weatherDate.hourly.temperature_2m[index]}℃</span>
                </div>
                )
            }):null}
            </div>
        </div>
    )
}
export default DayButtons;