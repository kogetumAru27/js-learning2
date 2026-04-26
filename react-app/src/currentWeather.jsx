import { changeWeathercode,starcatch } from "./utlis";
import styles from"./Weather.module.css";
function CurrentWeather({weatherDate,selectDate}){
    const nightIndex = weatherDate?weatherDate.hourly.time.indexOf(selectDate + "T20:00"):-1;
    return(
        <div className={styles.CurrentWeather}>
             <div className={styles.weatherCard}>
            <p>天気:{weatherDate && changeWeathercode(weatherDate.current.weathercode)}</p>
            </div>
            <div className={styles.weatherCard}>
            <p>気温:{weatherDate && weatherDate.current.temperature_2m}℃</p>
            </div>
            <div className={styles.weatherCard}>
            <p>降水量:{weatherDate && weatherDate.current.precipitation}mm</p>
            </div>
            <div className={styles.weatherCard}>
            <p>湿度:{weatherDate && weatherDate.current.relativehumidity_2m}%</p>
            </div>
            <div className={styles.weatherCard}>
            <p>星空:{weatherDate && starcatch(weatherDate.current.cloudcover)}</p>
            </div>
            <div className={styles.weatherCard}>
            <p>今夜の星空:{weatherDate && nightIndex !== -1 && starcatch(weatherDate.hourly.cloudcover[nightIndex])}</p>
            </div>
        </div>
    )

}
export default CurrentWeather;