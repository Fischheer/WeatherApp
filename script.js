const key = "fd41c08cdcb75cb379b342afce131d47"

function putData(data) {
  document.querySelector(".city").innerHTML = `Tempo em ${data.name}`
  document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)}°C`
  document.querySelector(".prevision-text").innerHTML = data.weather[0].description
  document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
  document.querySelector(".prevision-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

  putData(data)
}

function buttonClick() {
  const city = document.querySelector(".input-city").value

  searchCity(city)
}