const api = "your-api-key";    //Replace with your API key
const w_data = document.querySelector(".weatherdata");
const c_name = document.getElementById("city");
const form = document.querySelector("form");
const img = document.querySelector(".icon")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(city.value);
  let city_v = city.value;
  getdata(city_v);
});

async function getdata(city_v) {
  try {
    // const res= await fetch(`https://openweathermap.org/data/2.5/weather?q=${city_v}&appid=${api}&units=metric`);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_v}&appid=${api}&units=metric`
    );
    if (!res.ok) {
      throw alert("Enter Valid location");
    }

    const j = await res.json();
    // console.log(j);

    const tem = Math.floor(j.main.temp);
    const des = j.weather[0].description;
    const ico = j.weather[0].icon;

    const detail=[
        `Humidity : ${j.main.humidity}%`,
        `Wind Speed : ${j.wind.speed}m/s`
    ]

    // console.log(ico);

    w_data.querySelector(".temperature").textContent = `${tem}°C`;
    w_data.querySelector(".description").textContent = `${des}`;

    // console.log(`https://openweathermap.org/img/wn/${ico}.png`); 
    // ic.innerHTML = `<img src="https://openweathermap.org/img/wn/${ico}.png" alt="">`;

    img.innerHTML = `<img src="https://openweathermap.org/img/wn/${ico}.png" alt="">`

    w_data.querySelector(".details").innerHTML=detail.map((det)=>{
       return `<div>${det}</div>`
    }).join("")
  } catch (er) {}
}
