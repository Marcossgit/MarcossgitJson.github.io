// Tämä funktio hakee ja näyttää JSON-datan toisella sivulla
function fetchData() {
    const jsonData = {
        "otsikko": "JSON-datan käsittelyä",
        "kuvaus": "Tällä sivustolle haetaan JSON-muotoista dataa",
        "kuva": "https://jaakkola.github.io/json/digi.JPG",
        "opintojakso": {
            "nimi": "Digitekniikat",
            "tunnus": "DIG4TA021",
            "opintopisteet": 5
        },
        "sisalto": [
            "low-code",
            "sisällönhallintajärjestelmät",
            "responsiivinen käyttöliittymä ja komponentit",
            "tiedon haku julkisista palveluista rest-rajapinnan yli"
        ],
        "tekniikat": [
            { "aihe": "low-code", "linkki": "https://www.weebly.com/" },
            { "aihe": "wordpress", "linkki": "https://wordpress.com/" },
            { "aihe": "bootstrap", "linkki": "https://getbootstrap.com/" },
            { "aihe": "JSON", "linkki": "https://www.json.org/json-en.html" }
        ]
    };

    let jsonContainer = document.getElementById("jsonData");

    jsonContainer.innerHTML = `
        <h3>${jsonData.otsikko}</h3>
        <p>${jsonData.kuvaus}</p>
        <img src="${jsonData.kuva}" alt="Digi kuva">
        <h4>Opintojakso: ${jsonData.opintojakso.nimi}</h4>
        <p>Tunnus: ${jsonData.opintojakso.tunnus}</p>
        <p>Opintopisteet: ${jsonData.opintojakso.opintopisteet}</p>
        <h4>Sisältö:</h4>
        <ul>
            ${jsonData.sisalto.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h4>Tekniikat:</h4>
        <ul>
            ${jsonData.tekniikat.map(tech => `<li><a href="${tech.linkki}" target="_blank">${tech.aihe}</a></li>`).join('')}
        </ul>
    `;
}

// Suoritetaan, kun sivu on ladattu
document.addEventListener("DOMContentLoaded", fetchData);
