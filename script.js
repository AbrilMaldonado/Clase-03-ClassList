// document.write("<p>Hola Guayerd</p>")
// document.querySelector("#uno").classList.remove("")
// document.querySelector("#cuatro").classList.add("")
// document.querySelector("#tres").classList.replace("")
// document.querySelector("#cinco").classList.toggle("");
// document.querySelector("#cuatro").classList.toggle("");


//1. Crear un párrafo. Luego desde el javascript hacer que se vea rojo.

/* document.querySelector("p").classList.add("rojo"); */

//2. Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.

/* document.querySelectorAll("p").forEach(e => e.classList.add("fondoVerde")); */

//3. Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además 
// hacer que el texto se vea blanco.

/* document.querySelectorAll("p").forEach(e => e.classList.add("fondoCeleste"));

document.querySelectorAll(".blanco").forEach(e => e.classList.add("textoBlanco")); */

//4. En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 
// y en rojo del tres para abajo.

/* notas = [9,2,7,6,6,4,5,10,3,9.5]

let notes = notas.forEach(n => {
    document.write(`<p>${n}</p>`)
});

notes(notas);


const nota = document.querySelector("p").forEach(e => {
    if(e>7){
        e.classList.add("textoVerde");
    } else if (e>=4 && e<=6){
        e.classList.add("amarillo");
    } else if(e<=3){
        e.classList.add("rojo");
    } 
})

nota(notas); */

//5. Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a 
// preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. 
// Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).

/* let color1 = parseInt(prompt("Que color quiere cambiar? \n 1.Rojo \n 2.Verde \n 3.Azul"));
let color2 = parseInt(prompt("Por cual? Seleccione una opción. \n 1.Rojo \n 2.Verde \n 3.Azul"));



const cambiarColor = (c1, c2) => {
    if(c1 === 1){
        let rojo = document.querySelector(".rojo");
        switch(c2){
            case 1: rojo.classList.replace("rojo", "rojo");
            break;
    
            case 2: rojo.classList.replace("rojo","verde");
            break;
    
            case 3: rojo.classList.replace("rojo","azul");
            break;
        }
    } else if(c1 === 2){
        let verde = document.querySelector(".verde");
        switch(c2){
            case 1: verde.classList.replace("verde", "rojo");
            break;
    
            case 2: verde.classList.replace("verde", "verde");
            break;
    
            case 3: verde.classList.replace("verde", "azul");
            break;
        }
    } else if(c1 === 3){
        let azul = document.querySelector(".azul");
        switch(c2){
            case 1: azul.classList.replace("azul", "rojo");
            break;
    
            case 2: azul.classList.replace("azul", "verde");
            break;
    
            case 3: azul.classList.replace("azul", "azul");
            break;
        }
    }
}

cambiarColor(color1, color2); */


/* 6. Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de
párrafos con esa palabra y ese color que se requiera. */

/* let palabra = prompt("Que palabra desea ingresar?");
let color = prompt("Que color elige? \n 1.Amarillo \n 2.Violeta \n 3.Verde").toLowerCase();
let cantidad = parseInt(prompt("Cuantas veces quiere que se repita?"));


const armarParrafo = (pa, co, cant) => {
    for(let i=0; i < cant; i++){
        document.write(`<p class="${co}">${pa}</p>`);
    } 
}

armarParrafo(palabra, color, cantidad); */


// 7. a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia”
// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla.
// d) Remover de los primeros 4 párrafos la clase “ayuda”
// e) Crear desde el CSS estilos personalizados para cada clase.


// 8.Dado el siguiente HTML, poner en color azul los textos que comiencen con la letra “V”

/* document.querySelectorAll("span").forEach(element => {
   if(element.innerText.charAt(0) === "V"){
       element.classList.add("azul");
   } 
});
 */










