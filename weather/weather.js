let txt = document.getElementById("textbox");
let temp = document.getElementById("temp-value");
let button = document.getElementById("search");
let request = document.getElementById("city-name");
let city = '';
button.addEventListener("click", async () => {
  let city = txt.value;
  city = city.charAt(0).toUpperCase() + city.slice(1)
  request.innerHTML = city + ':';
  txt.value = '';
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=1adf9c98d1f1ffc3e24690db5e1f1659')
  .then(async function(resp) {const data = await resp.json()
   var temperature = data.main.temp;
   var temperature = temperature - 273.15;
   temp.innerHTML = parseInt(temperature)})
  .catch(function () {
    txt.placeholder = 'Please Enter a Valid Location';
  })
})
