let txt = document.getElementById("textbox");
let value = document.getElementById("temp-value");
let button = document.getElementById("search");
let city = '';
button.addEventListener("click", () => {
  let city = txt.value;
  txt.value = '';
  fetch("https://api.openweathermap.org/data/2.5/weather?id=" + city + "&limit=5&appid={e90d1a21ca09396aeca75540ee6f0a59}")
  .then(function(resp) {return resp.json() })
  .then(function(data) {const weather = JSON.parse(data)
  return weather})
  .then(function (data) {let temperature = data.main.temp})
  .catch(function () {
    txt.placeholder = 'Please enter a valid city';
  })
})