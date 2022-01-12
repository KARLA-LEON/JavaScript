/*
Buenos días 6-11
Buenas tardes 12-18
Buenas noches 19-23
Dejame dormir 0-5
 */

let hora = prompt("¿Qué hora es? (Escríbelo con un número del 1 al 24 garsias)");
if(hora >= 6 && hora <= 11) {
    document.write("Wenos dias chul@");
} else if (hora >= 12 && hora <= 18){
        document.write("Wenas wenas tardes");
} else if(hora >= 19 && hora <= 23) {
        document.write("Wenas noshes oiga");
} else if(hora >24){
        document.write("TE DIJE QUE ESCRIBIERAS LA HORA DEL 1 AL 24 BIEJ@ BABOS@");
} else {
        document.write("Duermete otro rato wei");

}