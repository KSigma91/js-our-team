/*
Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/


// seleziono gli elementi del DOM
let stampaMembro = document.querySelector(".team-container"); 

// creo una lista contenente: nomi, ruoli e foto dei membri
const aggMembro = [
    {
        "nomeECognome" : "Wayne Barnett",
        "ruolo" : "Founder CEO",
        "img" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nomeECognome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "img" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nomeECognome" : "Scott Estrada",
        "ruolo" : "Developer",
        "img" : "img/scott-estrada-developer.jpg"
    },
    {
        "nomeECognome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "img" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nomeECognome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "img" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nomeECognome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "img" : "img/wayne-barnett-founder-ceo.jpg"
    },  
];

//console.log(aggMembro[0]);
//let stampa = document.querySelector(".team-card").innerHTML += aggMembro;

//for (let array in aggMembro){
    //console.log(array, aggMembro[array]);
//}

for (let i = 0; i < aggMembro.length; i++){

    // creo la classe "team-card" dove inseriremo il contenuto
    let areaTeam = document.createElement("div");
    areaTeam.classList.add("team-card");
    stampaMembro.append(areaTeam);

    // creo la classe "card-image" e lo inserisco in "team-card"
    let cardImgTeam = document.createElement("div");
    cardImgTeam.classList.add("card-image");
    areaTeam.append(cardImgTeam);

    // creo il tag "img" da inserire in "card-image"
    let imgTeam = document.createElement("img");
    imgTeam.setAttribute("src", aggMembro[i].img);
    cardImgTeam.append(imgTeam);

    // creo la classe "card-text" per le info
    let infoTeam = document.createElement("div");
    infoTeam.classList.add("card-text");
    areaTeam.append(infoTeam);

    // e inserisco il testo
    let textInfo = document.createElement("h3");
    infoTeam.append(textInfo);
    textTeam = aggMembro[i].nomeECognome;
    textInfo.append(textTeam);

    let roleTeam = document.createElement("p");
    infoTeam.append(roleTeam);
    let textRoleTeam = aggMembro[i].ruolo;
    roleTeam.append(textRoleTeam);
    
 }

