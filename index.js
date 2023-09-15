var countries = [];

const fetchCountries = (()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')           //api for the get request
    .then(response => response.json())
    .then(data => {
   data.forEach(country => {
    var countryDiv = document.createElement('div')
    var countryName = document.createElement('div')
    var countryFlag = document.createElement('img')
    countryFlag.setAttribute('src', country.flags.png)
    var countryContinent = document.createElement('div')
    countryContinent.textContent = `continent: ${country.continents[0]}`

    countryName.textContent = `country name: ${country.name.common}`
    countryDiv.appendChild(countryFlag)
    countryDiv.appendChild(countryName)
    countryDiv.appendChild(countryContinent)
    

    document.body.appendChild(countryDiv)
   });
    });
})

fetchCountries()