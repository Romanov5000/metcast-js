function date () {
    let ld = new Date();
    let time = document.querySelector('.date');
    time.innerHTML  = (ld.toLocaleDateString());
}
date();

async function metcast () {
    let response = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=b663d175a64573478b5776c010c00b1e');
    let cityMetcast = await response.json();
    console.log(cityMetcast);
    document.querySelector('.city').textContent = cityMetcast.name;
    document.querySelector('.degree').innerHTML = Math.round(cityMetcast.main.temp - 273) + '&deg';
    document.querySelector('.weather').innerHTML = cityMetcast.weather[0].description;
    document.querySelector('.image').innerHTML = `<img src='https://openweathermap.org/img/wn/${cityMetcast.weather[0].icon}@2x.png'>`;
    document.querySelector('.humidity').innerHTML = `Humidity ${cityMetcast.main.humidity}%`;
}
metcast();
