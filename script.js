document.addEventListener('DOMContentLoaded', function () {

    const countryInput = document.getElementById("country");

    
    async function getCountryInfo() {
        const country = countryInput.value.trim();  
        const url = "https://restcountries.com/v3.1/name/" + country;
        

        try {
            const response = await fetch(url);
            const jsonObj = await response.json();
            console.log(jsonObj);
            console.log("Received country info");
            handleInfo(jsonObj);
            
        } catch (error) {
            console.warn("Our error", error);
        }
    }
    function handleInfo(countryInfo) {
        const sectionCountryInfo = document.getElementById("country-info");
        sectionCountryInfo.innerHTML = '';  

        
        let capital = document.createElement('p');
        let population = document.createElement('p');
        let region = document.createElement('p');
        let flag = document.createElement('img');

        
        population.innerText = `Population: ${countryInfo[0].population}`;
        capital.innerText = `Capital: ${countryInfo[0].capital[0]}`;
        region.innerText = `Region: ${countryInfo[0].region}`;

        let source = countryInfo[0].flags.png;
        flag.src = source;

        
        const section = document.getElementById("country-info");
        const ul = document.createElement('ul');

        
        const capitalItem = document.createElement('li');
        capitalItem.innerText = `Capital: ${countryInfo[0].capital[0]}`;

        const populationItem = document.createElement('li');
        populationItem.innerText = `Population: ${countryInfo[0].population}`;

        const regionItem = document.createElement('li');
        regionItem.innerText = `Region: ${countryInfo[0].region}`;

        const flagItem = document.createElement('li');
        const flagLabel = document.createTextNode('Flag: ');
        flagItem.appendChild(flagLabel);
        flagItem.appendChild(flag);

        

       
        ul.appendChild(capitalItem);
        ul.appendChild(populationItem);
        ul.appendChild(regionItem);
        ul.appendChild(flagItem);

       
        const bordersItem = document.createElement('li');
        if (countryInfo[0].borders && countryInfo[0].borders.length > 0) {
            bordersItem.innerText = `Borders: ${countryInfo[0].borders.join(', ')}`;
        } else {
            bordersItem.innerText = "No borders.";
        }

        
        ul.appendChild(bordersItem);

        
        section.appendChild(ul);


    
        
    }

    
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        getCountryInfo();
        

});
});

