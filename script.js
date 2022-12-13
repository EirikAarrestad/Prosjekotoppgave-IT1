//Deklarer variabler
const contactContainer = document.querySelector(".wrapper");

//Lager et objekt med tittel og tekst som inneholder informasjon som blir brukt i footeren
let contactInfo = [
    {
        title: "Besøksadresse",
        underText: "Skien videregående skole",
    },
    {
        title: "Postadresse",
        underText: "Postboks 2844 | 3702 Skien",
    },
    {
        title: "Telefon",
        underText: "35 91 80 00",
    },
    {
        title: "E-post",
        underText: "eksempel@vtfk.no",
    },
];

let contactText = "";
//Lager en "for løkke" for å lage hele grid-containeren med objektes titel og tekst
for (let i = 0; i < contactInfo.length; i++) {
    contactText +=
        "<div class='gridContainer'>" +
        "<p class='header'>" +
        contactInfo[i].title +
        "</p>" +
        "<p class='text'>" +
        contactInfo[i].underText +
        "</p>" +
        "</div>";
}
contactContainer.innerHTML = contactText;
