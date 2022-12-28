let txt = document.getElementById("textbox");
let temp = document.getElementById("temp-value");
let button = document.getElementById("search");
let city = '';

button.addEventListener("click", async () => {
  let city = txt.value;
  txt.value = '';
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=1adf9c98d1f1ffc3e24690db5e1f1659')
  .then(async function(resp) {const data = await resp.json()
   console.log(data)})

  .catch(function () {
    txt.placeholder = 'Please Enter a Valid Location';
  })
})
