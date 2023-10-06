"use strict"

//créer un personnage "John" avec une jauge de santé mentale de 10 qui diminue
//paramètre pour que la jauge diminue : -1 dès que Wejdene passe à la radio

//boucle s'arrête lorsque la jauge arrive à 0 --> afficher "explosion"
//ou alors lorsque le personnage arrive chez lui après les 30 feux rouges

//liste de 5 musiques dont Wejdene qu'il faut random
//lorsque ça tombe sur wejdene = changement de taxi
//si john rentre vivant chez lui il faut afficher le nombre de taxi qu'il a pris lors des 30 feux rouges et préciser qu'il est bien arrivé
 
// 
let nom = "John";
let santeMentale = 10;

let feux = 30
let changement = 0

console.log(`${nom} a ${santeMentale} de santé mentale.`);
console.log(`${nom} rentre dans le premier taxi`);


//génère une musique au hasard
let radio;


//tant que la santé mentale est à 10, continue
//if radio = anissa de wejdene alors -1 de santeMentale
//


//il faut encore que les chansons soient random à chaque feu
let i = 0;
do {
    radio = (Math.floor(Math.random() * 5+1));
    i += 1;
    switch(radio){
        case 1:
            radio= "Anissa de Wejdene";
            break;
        case 2:
            radio= "Warriors de Imagine Dragons";
            break;
        case 3:
            radio = "That's What I Like de Bruno Mars";
            break;
        case 4:
            radio = "Macarena de Damso";
            break;
        case 5:
            radio = "Video games de Lana Del Rey";
            break;
    }

    console.log(`La radio du taxi joue ${radio}`);
        if(radio=="Anissa de Wejdene"){
            console.log("Changement de taxi");
            santeMentale--
        }else{
            console.log('Prochain feu rouge');
        }
        console.log(i);
        } while (i < 30 && santeMentale!=0);   

if(santeMentale == 0){
    console.log("John a explosé")
}else{
    console.log(`John est rentré chez lui avec ${santeMentale} de santé mentale.`);
}
