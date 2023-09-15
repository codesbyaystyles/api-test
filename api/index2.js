var button = document.getElementById('button')
var input = document.getElementById('input')


const getCountry = (country)=>{
    // get coiuntry with fetch
    fetch(`https://restcountries.com/v3.1/name/${country}`)           //api for the get request
    .then(response => response.json())
    .then(data =>{
        var country = document.getElementById('country')



        var countryName = document.querySelector('.name')
        countryName.textContent = `Name: ${data[0].name.common}`;
        var flag = document.querySelector('img')
        flag.setAttribute('src', data[0].flags.png)
    });
}

button.addEventListener('click', ()=>{
    getCountry(input.value)
})