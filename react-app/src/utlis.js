export function changeWeathercode(code){
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
export function starcatch(code){
    if(0 <= code && code <= 20)return"よく見える";
    if(21 <= code && code <= 50)return"見える"
    if(51 <= code && code <= 80)return"見えにくい";
    if(81 <= code && code <= 100)return"見えない";
}
