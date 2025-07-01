const XP = parseInt(gets());

let Nivel;

if (XP >= 1.000 ) {
    Nivel = "Ferro";
} else if (XP >= 1.001 && XP <= 2.000){
    Nivel = "Bronze"
} else if (XP >= 2.001 && XP <= 5.000){
    Nivel = "Prata"
} else if (XP >= 5.001 && XP <= 7.000){
    Nivel = "Ouro"
} else if (XP >= 7.001 && XP <= 8.000){
    Nivel = "Platina"
} else if (XP >= 8.001 && XP <= 9.000){
    Nivel = "Ascendente"
} else if (XP >= 9.001 && XP <= 10.000){
    Nivel = "Imortal"
} else if (XP >= 10.001){
    Nivel = "Radiante"
}

print (Nivel);
