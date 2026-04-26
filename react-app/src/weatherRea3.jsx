import { useState,useEffect } from "react";
import CurrentWeather from "./currentWeather";
import {changeWeathercode,starcatch } from "./utlis";
import DayButtons from "./DayButtons";
import styles from "./Weather.module.css";
function Weather(){
    const [weatherDate,setweatherDate] = useState(null);
    const [targetDate,setTargetdate] = useState("今日")
    const [error,setError] = useState("");
    const [locaname,setLocationname] = useState("");
    const [loading,setloading] = useState(false);

    useEffect(() => {
      function getlocation(){
       return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                posi => resolve(posi),
                er => reject(er)
            );
        });
    }  
       async function getLocation() {
        setloading(true)
        try{
            const posi = await getlocation();
            const lat = posi.coords.latitude;
            const lng = posi.coords.longitude;
            const city = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
            const JsonDate = await city.json();
            setLocationname(JsonDate.address?.city || JsonDate.address?.town || "現在地");
            const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode,precipitation,relativehumidity_2m,cloudcover&hourly=temperature_2m,weathercode,precipitation,cloudcover`);
            const wetDate = await weather.json();
            setweatherDate(wetDate);
        }catch(er){
            console.log("失敗",er);
            setError("位置情報か天気の取得に失敗しました。");
        }
        setloading(false);
       }
       getLocation();
    },[]);
    //変数
    const today = new Date().toISOString().split("T")[0];
    const tom = new Date();
    tom.setDate(tom.getDate() + 1);
    const tomorrow = tom.toISOString().split("T")[0]
    const dayaf = new Date();
    dayaf.setDate(dayaf.getDate() + 2);
    const DayAftertomorrow = dayaf.toISOString().split("T")[0];
    const DateMap = {
        "今日":today,
        "明日":tomorrow,
        "明後日":DayAftertomorrow
    }
    const weeks = [];
    const selectDate = DateMap[targetDate];
    for (let i = 0; i < 7; i++) {
        const week = new Date();
        week.setDate(week.getDate() + i);
        weeks.push(week.toISOString().split("T")[0]);

    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{locaname}</h1>
            <h2>{loading?"読み込み中・・・":null}</h2>
            {error && <p style={{color:"red",fontWeight:"bold"}}>⚠️ {error}</p>}
            <CurrentWeather 
            weatherDate={weatherDate}
            selectDate={selectDate}
            />
            <DayButtons
            weatherDate={weatherDate}
            setTargetdate={setTargetdate}
            targetDate={targetDate}
            selectDate={selectDate}
            weeks={weeks}
            />
        </div>
    );
}
export default Weather;