var button = document.getElementById('button');
var input = document.getElementById('type');

const getCountry = (country)=>{
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data =>{
        var countryData = 
        `
        <div class="name">Name: ${data[0].name.common}</div>
        <img src="${data[0].flags.png}" alt="" class="image0 "> 
        <div>Capital: ${data[0].capital[0]}</div>
        `
        var country = document.getElementById("country");
        country.innerHTML = countryData;
    
        var languages = data[0].languages;
    })
}
button.addEventListener('click', ()=>{
    getCountry(input.value)
})