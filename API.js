
const input = document.getElementsByTagName('input')[0]
const result = document.getElementById('result')

const weather = () => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=835d5fea7757319aab78079f8f761840`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			result.innerHTML = `Description: ${data.weather[0].main} (${data.weather[0].description})
								Temperature lol: ${(data.main.temp-273.15).toFixed(2)}°C`
		})
		.catch(err => result.innerHTML = 'enter a valid city plz')
}

// import fetch from "node-fetch";
// const node_test = () => {
// 	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=835d5fea7757319aab78079f8f761840`)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data)
// 		})
// }

// node_test()

