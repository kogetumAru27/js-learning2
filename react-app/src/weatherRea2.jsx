import { useEffect,useState } from "react";
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
function starcatch(code){
    if(0 <= code && code <= 20)return"よく見える";
    if(21 <= code && code <= 50)return"見える"
    if(51 <= code && code <= 80)return"見えにくい";
    if(81 <= code && code <= 100)return"見えない";
}
function Weather(){
    const [Loname,setLoName] = useState("");
    const [load,setload] = useState(false);
    const [weatherDate,setweatherDate] = useState(null);
    const [targetDate,setTargetdate] = useState("今日");
    const [error,setError] = useState("")
    useEffect(() => {
        function getLocation(){
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => resolve(position),
                    error => reject(error)
                );
            });
        }
        async  function locationDate(){
            setload(true);
            setError("");
            try{
                const position = await getLocation();
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const posi = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
                const results = await posi.json();
                setLoName(results.address?.city || results.address?.town || "現在地");
                const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode,precipitation,relativehumidity_2m,cloudcover&hourly=temperature_2m,weathercode,precipitation,cloudcover`);
                const result = await weather.json();
                setweatherDate(result);

            }catch(error){
                console.log("失敗",error);
                setError("位置情報、天気情報の取得に失敗しました。設定を確認してください。")
            }
            setload(false);
        }
        locationDate();
    },[]);
    const today = new Date().toISOString().split("T")[0];
    const to = new Date();
    to.setDate(to.getDate() + 1);
    const tomorrow = to.toISOString().split("T")[0];
    const dayaf = new Date();
    dayaf.setDate(dayaf.getDate() + 2);
    const DayAftertomorrow = dayaf.toISOString().split("T")[0];
    const DateMap ={
        "今日":today,
        "明日":tomorrow,
        "明後日":DayAftertomorrow
    }
    const selectDate = DateMap[targetDate];
    const weeks = [];
    for (let i = 0; i < 7; i++) {
        const week = new Date();
        week.setDate(week.getDate() + i);
        weeks.push(week.toISOString().split("T")[0]);
    }
    return(
        <div>
            <h1>{Loname}</h1>
            {/*エラーがある時のみ表示*/}
            {error && <p style={{color:"red",fontWeight:"bold"}}>⚠️ {error}</p>}
            <h2>{load?"読み込み中・・・":null}</h2>
            <p>天気{weatherDate && changeWeathercode(weatherDate.current.weathercode)}</p>
            <p>気温{weatherDate && weatherDate.current.temperature_2m}℃</p>
            <p>降水量{weatherDate && weatherDate.current.precipitation}mm</p>
            <p>湿度{weatherDate && weatherDate.current.relativehumidity_2m}%</p>
            <p>今日の星空{weatherDate && starcatch(weatherDate.current.cloudcover)}</p>
            <p>{weatherDate && (() => {
                const index = weatherDate.hourly.time.indexOf(selectDate + "T20:00");
                if(index === -1)return null;
                return(
                    <p>今夜の星空{starcatch(weatherDate.hourly.cloudcover[index])}</p>
                );
            })()}</p>
                <div>
    <button onClick={() => setTargetdate("今日")}>今日</button>
    <button onClick={() => setTargetdate("明日")}>明日</button>
    <button onClick={() => setTargetdate("明後日")}>明後日</button>
    <button onClick={() => setTargetdate("一週間")}>１週間</button>
    {weatherDate && targetDate !== "一週間" && weatherDate.hourly.time.map((time,i) => {
    if(time.split("T")[0] !== selectDate)return null;
    return(
    <div key={time}>
    <span>{time.split("T")[1]}</span>
    <span>{changeWeathercode(weatherDate.hourly.weathercode[i])}</span>
    <span>{weatherDate.hourly.temperature_2m[i]}℃</span>
    </div>
        ); 
    })}
    {targetDate === "一週間"?weeks.map(week => {
        const index = weatherDate.hourly.time.indexOf(week + "T12:00");
        return(
            <div key={week}>
            <span>{week} 12:00</span>
            <span>{changeWeathercode(weatherDate.hourly.weathercode[index])}</span>
            <span>{weatherDate.hourly.temperature_2m[index]}℃</span>
            </div>
            )
        }):null}
    </div>
        </div>
    );
}
export default Weather;