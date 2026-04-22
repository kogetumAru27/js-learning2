import { useState,useEffect } from "react";
function changeWeathercode(code){
    if(code === 0 || code === 1)return"☀️晴れ";
    if(code === 2) return "⛅晴れ時々曇り";
    if(code === 3) return "☁️曇り";
    if(code === 48 || code === 45)return"🌫️霧";
    if(code === 51 || code === 53 || code === 55)return"🌦️霧雨";
    if(code === 61 || code === 63 || code === 65)return"🌧️雨";
    if(code === 71 || code === 73 || code === 75)return"⛄️雪";
    if(code === 80 || code === 81 || code === 82)return"🌦️にわか雨";
    if(code === 95)return"⛈️雷雨";
}
function Weather(){
    const [weatherDate,setweatherDate] = useState(null);
    const [targetDate,setTargetdate] = useState("今日");
    const [locationname,setLocationname] = useState("");
    const [load,setload] = useState(false);
    const today = new Date().toISOString().split("T")[0];
        console.log(today);
        const to = new Date();
        to.setDate(to.getDate() + 1);
        const tomorrow = to.toISOString().split("T")[0];
        console.log(tomorrow);
        const dayaf = new Date();
        dayaf.setDate(dayaf.getDate() + 2);
        const Dayaftertomorrow = dayaf.toISOString().split("T")[0];
        console.log(Dayaftertomorrow);
    const dateMap = {
        "今日":today,
        "明日":tomorrow,
        "明後日":Dayaftertomorrow
    }
    const selectDate = dateMap[targetDate];
    console.log(selectDate);
    useEffect(() => {
        function getLocation(){
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => resolve(position),
                    error => reject(error)
                );
            });
        }
        async function locationDate(){
            setload(true);
            try{
                const Date = await getLocation();
                const lat = Date.coords.latitude;
                const lng = Date.coords.longitude;
                const city = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
                const results = await city.json();
                setLocationname(results.address?.city || results.address?.town || "現在地");
                const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode,precipitation,relativehumidity_2m,cloudcover&hourly=temperature_2m,weathercode,precipitation,cloudcover`)
                const result = await weather.json();
                console.log(result)
                setweatherDate(result)
            }catch(error){
                console.log("失敗",error);

            }
            setload(false);
        }
        locationDate();
    },[]);
    return(
        <div>
            <h1>{locationname}</h1>
            {load?<p>読み込み中・・・</p>:null}
            {weatherDate && <p>{ weatherDate.current.temperature_2m}</p>}
            {weatherDate && <p>{ weatherDate.current.relativehumidity_2m}</p>}
            {weatherDate && <p>{ weatherDate.current.precipitation }</p>}
            {weatherDate && <p>{ changeWeathercode(weatherDate.current.weathercode) }</p>}
            <button onClick={() => setTargetdate("今日")}>今日</button>
            <button onClick={() => setTargetdate("明日")}>明日</button>
            <button onClick={() => setTargetdate("明後日")}>明後日</button>
            {weatherDate && weatherDate.hourly.time.map((time, i) => {
            if(time.split("T")[0] !== selectDate) return null;
            return (
                    <div key={time}>
                    <span>{time.split("T")[1]}</span>
                    <span>{weatherDate.hourly.temperature_2m[i]}℃</span>
                    <span>{changeWeathercode(weatherDate.hourly.weathercode[i])}</span>
                    </div>
                    )
                })}
        </div>
    )
}
export default Weather;