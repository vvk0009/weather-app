let form = document.querySelector('form');
let input = document.querySelector('input');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let img = document.querySelector('img');
let p = document.querySelector('p');
let card = document.querySelector("#weatherCard");

let weather = async (e) => {
    e.preventDefault();
    try {
        card.className = "card my-3 rounded-0 shadow p-4";


        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0622a9d8fd9e4426b5275739240103&q=${input.value}&aqi=yes`);


        let data = await response.json();

        h1.innerText = data.current.temp_c + '°C';
        h2.innerText = data.location.name;
        p.innerText = data.current.condition.text;
        img.setAttribute('src', data.current.condition.icon);

    } catch (error) {
        window.alert("Something Went Wrong..");

    }
};




form.addEventListener('submit', weather);