function showAll(hourly,date){
    hourly.time.forEach((item,i) => {
        if(item.split("T")[0] !== date)return;
        const li = document.createElement("li");
        const tempr = hourly.temperature_2m[i]
        const weather = weathercodeChange(hourly.weathercode[i]);
        li.textContent = weather + tempr;
        DOM.list.appendChild(li)
    });
}
function showWeeks(hourly){
    const weeks = [];
    for (let i = 0; i < 7; i++) {
        const today = new Date();
        today.setDate(today.getDate() + i);
        const today2 = today.toISOString().split("T")[0];
        weeks.push(today2);       
    }
    DOM.btn.addEventListener("click",function(){
        weeks.forEach(week => {
            const time = hourly.time.indexOf(week + "T12:00");
            if(time !== -1){
                const li = document.createElement("li");
                const tempr = hourly.temperature_2m[time];
                const weather = weathercodeChange(hourly.weathercode[time]);
                li.textContent = weather + tempr;
                DOM.list.appendChild(li)
            }
        })
    })
}
function nightcloud(hourly,date){
    const index = hourly.time.indexOf(date + "T20:00");
    if(index !== -1){
        const cloud = cloudcover(hourly.cloudcover[index]);
        DOM.nightStar.textContent = "夜の星" + cloud
    }
}