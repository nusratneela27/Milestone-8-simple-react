const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countires =>{
    console.log(countires[0]);
    const countriesHTML =  countires.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

}

// option - 3-----------
const getCountryHTML = ({name, flags, area,region }) =>{
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Contient: ${region}</p>
        <img src="${flags.png}">
    </div>
    `
}


// option 1-----------
// const getCountryHTML = country =>{
//      const {name,flags} = country;
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }


// orginal----------
// const getCountryHTML = country =>{
//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }

loadCountries()