"use strict"

//créer un personnage "John" avec une jauge de santé mentale de 10 qui diminue
//paramètre pour que la "jauge" diminue : -1 dès que Wejdene passe à la radio

//boucle s'arrête lorsque la jauge arrive à 0 --> afficher "explosion"
//ou alors lorsque le personnage arrive chez lui après les 30 feux rouges

//liste de 5 musiques dont Wejdene qu'il faut random
//lorsque ça tombe sur wejdene = changement de taxi
//si john rentre vivant chez lui il faut afficher le nombre de taxi qu'il a pris lors des 30 feux rouges et préciser qu'il est bien arrivé
 
// création des variables
let nom = "John"; //nom de notre personnage
let santeMentale = 10; // points de santé mentale de base
let changement = 0; //changements de taxis effectués (0 pour l'instant car la course n'a pas encore commencé)
let radio; //variable qu'on va utiliser pour avoir une musique au hasard
let i = 0; //représente le nombre de feux rouges

console.log(`${nom} a ${santeMentale} de santé mentale.`); //affiche dans la console pour avoir un peu de contexte sur ce qui se déroule après
console.log(`${nom} rentre dans le premier taxi`);

//génère une musique au hasard

do { //le programme va executer ça tant qu'on est pas arrivé aux 30 feux ou que John n'a pas explosé
    radio = (Math.floor(Math.random() * 5+1)); //(décide d'un chiffre random qui va choisir la chanson, j'ai ajouté +1 parce que ça me mettait 0 alors que je souhaite commencer à 1)
    i += 1; //on ajoute 1 par feu passé
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
    } //^les 5 chansons qui vont être choisies de façon random tous les tours

    console.log(i); //pour voir à combien de taxi on en est (sert de décompte)
    console.log(`La radio du taxi joue ${radio}`); //indique la chanson

        if(radio=="Anissa de Wejdene"){ //si on tombe sur anissa alors john change de taxi
            console.log("Changement de taxi");
            santeMentale-- //la santé mentale baisse de 1 à chaque fois u'un taxi joue anissa
            changement++ //on garde le compte des changements de taxi pour l'afficher après, donc +1 par changement
        }else{
            console.log('Prochain feu rouge'); //si la chanson n'est pas anissa alors le trajet continue
        }
        } while (i < 30 && santeMentale!=0); // le programme va donc continuer tant qu'il y a des feux ou que la santé mentale ne soit pas 0.
        //On utilise && et pas || car pour cela il faudrait qu'au moins 1 des 2 soient vraies or elles ne le sont pas et le deviennent pas, si on laisse le ou logique || cela nous crée des boucles infinies donc on utlise &&

if(santeMentale == 0){
    console.log("John a explosé"); //lorsque john atteint 0 de santé mentale il explose
}else{
    console.log(`John est rentré chez lui avec ${santeMentale} de santé mentale et à changé ${changement} fois de taxis.`);
    //et enfin s'il finit les 30 feux rouges sans ecouter 10 fois wejdene alors il rentre chez lui.
}

