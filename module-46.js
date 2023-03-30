const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=countries=>{
    console.log(countries);
    const allCountriesHTML=countries.map(country=>getcountryData(country));
    const countryData=document.getElementById('countryData');
    console.log(allCountriesHTML[0]);
    
    countryData.innerHTML=allCountriesHTML;
}
const getcountryData=country=>{
    
    return `
     <div>
     <h3>${country.name.common}</h3>
     <img src="${country.flags.png}">
     </div>

    `;
}

loadCountry()