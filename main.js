
let img = document.querySelector('img');
let button = document.querySelector('#dogButton');

fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){

    return response.json()

})
.then(function(data){

    // console.log(data);

    // console.log(data.message); //use message url for the image
    
    // console.log(data.status);

    img.src = data.message
    

})


button.addEventListener('click', () => {

console.log('clicked')
fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){

    return response.json()

})
.then(function(data){

    // console.log(data);

    // console.log(data.message); //use message url for the image
    
    // console.log(data.status);

    img.src = data.message
    

})

})


//Weather App
let form = document.querySelector('#weatherApp')
let weather = document.querySelector('#weather')

form.addEventListener('submit', (event) => {

    event.preventDefault();
    let city = document.querySelector('#cityInput');
    if (city.value.includes(' ')){
        city.value.replaceAll(' ', '-');
    }
    console.log(city);
    let url = `https://goweather.herokuapp.com/weather/${city.value}`
    let encoded = encodeURI(url);
    let cityName = document.querySelector('#cityName')
    let wind = document.querySelector('#wind')
    let descrip = document.querySelector('#descrip')

    


    fetch(encoded)
    .then(function(response){
    
        return response.json()
    
    })
    .then(function(data){
    
        // console.log(data);
    
        console.log(data.temperature);
        weather.innerText = data.temperature
        cityName.innerText = city.value
        wind.innerText = data.wind
        descrip.innerText = data.description
        city.value = ""

         //use message url for the image
        
        // console.log(data.status);
    
        
        
    
    })




})