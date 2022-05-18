/*
Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/


// seleziono gli elementi del DOM
const team = document.getElementById("team"); 

// creo una lista contenente: nomi, ruoli e foto dei membri
const aggMembro = [
    {
        "nomeECognome" : "Angela Caroll",
        "ruolo" : "Chief Editor"
    },
    {
        "nomeECognome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer"
    },
    {
        "nomeECognome" : "Scott Estrada",
        "ruolo" : "Developer"
    },
    {
        "nomeECognome" : "Walter Gordon",
        "ruolo" : "Office Manager"
    },
    {
        "nomeECognome" : "Angela Lopez",
        "ruolo" : "Social Media Manager"
    },
    {
        "nomeECognome" : "Wayne Barnett",
        "ruolo" : "Founder CEO"
    },  
];
console.log(aggMembro[1]);
//console.log(aggMembro.nomeECognome);

for (let array in aggMembro){
    //console.log(array, aggMembro[array]);
}



//console.log(aggMembro);