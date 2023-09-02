let printDate = () =>{
    let date = new Date();
    let hours = String(date.getHours());
    let mins = String(date.getMinutes());
    let seconds = String(date.getSeconds());
    let dayOrNight = hours>12 ? "pm" : "am";

let convertHours = () =>{
    hours = (hours%12) || 12;
    return hours.length<2 ? "0" + hours : hours;
}

let convertMinutes = () =>{
    return mins.length<2 ? "0" + mins : mins;
}

let convertSeconds = () =>{
    return seconds.length<2 ? "0" + seconds : seconds;
}
date = date.toLocaleDateString();
document.getElementById("display").innerHTML = (`${date} ${convertHours()}:${convertMinutes()}:${convertSeconds()} ${dayOrNight}`)

}

setInterval(printDate,1000);

