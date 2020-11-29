class Vehiculo {
    constructor(marca, modelo, anio, precio, tipoVehiculo, uso, nPuertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.tipoVehiculo = tipoVehiculo;
        this.uso = uso;
        this.nPuertas = nPuertas;
    }
}






////////////////////////////////////////////////////////


/*  BASE
function crearContenido(elemento, texto, padre, id, clase) {
    if (document.readyState === "interactive" ||
        document.readyState === "complete"
    ) {
        // Creando elemento y asignando el texto
        const elemenoNuevo = document.createElement(elemento);
        elemenoNuevo.innerText = texto;
        if (id !== undefined) {
            elemenoNuevo.id = id;
        }
        if (clase == undefined) {
            elemenoNuevo.classList.add("col", "s6", "m4", "l3");
        }
        // Buscando al padre
        const contenidoPadre = document.querySelector(padre);
        contenidoPadre.appendChild(elemenoNuevo);


    } else {
        console.log("Cargando aún.......");
    }
}
*/



//insert inicial

/*
agregarCC("Alfa Romeo","Guilia","2020","238000000","Sedán","Nuevo","5");
agregarCC("Audi","A1","2020","183000000","Hatchback","Nuevo","5");
agregarCC("Baic","X25","2020","79990000","SUV","Nuevo","5");
agregarCC("BMW","BMWi","2020","17000000","Hatchback","Nuevo","3");
agregarCC("Brilliance","Konect","2020","10390000","SUV","Nuevo","5"); 
*/

function agregarCC(marca, modelo, anio, precio, tipoVehiculo, uso, nPuertas) {

    //creacion de parrafos
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const p7 = document.createElement("p");
    p1.innerText = "Marca: " + marca;
    p2.innerText = "Modelo: " + modelo;
    p3.innerText = `Año: ${anio}`;
    p4.innerText = `Precio: ${precio}`;
    p5.innerText = "Tipo Vehiculo: " + tipoVehiculo;
    p6.innerText = 'Estado Vehiculo: ' + uso;
    p7.innerText = `Numero De Puertas: ${nPuertas}`;
    //fin creacion de parrafos  

    //creacion de span
    const span = document.createElement("span");
    span.classList.add("card-title", "grey-text", "text-darken-4");
    span.innerText = 'Descripcion';


    const ico = document.createElement("i")
    ico.classList.add("material-icons", "right");
    ico.innerText = 'close';
    //fin creacion de span 


    const divCardReveal = document.createElement("div");
    divCardReveal.classList.add("card-reveal");

    span.appendChild(ico);
    divCardReveal.appendChild(span);

    p1.classList.add("marca");
    p2.classList.add("modelo");
    p3.classList.add("anio");
    p4.classList.add("precio");
    p5.classList.add("tipoVehiculo");
    p6.classList.add("uso");
    p7.classList.add("nPuertas");

    divCardReveal.appendChild(p1);
    divCardReveal.appendChild(p2);
    divCardReveal.appendChild(p3);
    divCardReveal.appendChild(p4);
    divCardReveal.appendChild(p5);
    divCardReveal.appendChild(p6);
    divCardReveal.appendChild(p7);


    const divCardContent = document.createElement("div");
    const spanDivCardContent = document.createElement("span");
    const icoCardContent = document.createElement("i");
    const pCardContent = document.createElement("p");
    const aCardContent = document.createElement("a");

    aCardContent.href = "#";
    aCardContent.innerText = "Ir al Vehiculo";
    icoCardContent.classList.add("material-icons", "right");
    icoCardContent.innerText = "more_vert";
    spanDivCardContent.classList.add("card-title", "activator", "grey-text", "text-darken-4");
    spanDivCardContent.innerText = `${marca} ${modelo}`;
    divCardContent.classList.add("card-content");

    //incrustar
    pCardContent.appendChild(aCardContent);
    spanDivCardContent.appendChild(icoCardContent);
    divCardContent.appendChild(spanDivCardContent);
    divCardContent.appendChild(pCardContent);
    //fin incrustar

    const imgCard = document.createElement("img");
    const divCardImg = document.createElement("div");
    const divCardHijo = document.createElement("div");
    const divCardPadre = document.createElement("div");

    imgCard.classList.add("activator", "maxminimg");
    imgCard.src = `img/${marca}.jpg`;

    divCardImg.classList.add("card-image", "waves-effect", "waves-block", "waves-light");
    divCardHijo.classList.add("card");
    divCardPadre.classList.add("col", "s6", "m4", "l3");

    divCardImg.appendChild(imgCard);
    divCardHijo.appendChild(divCardImg);
    divCardHijo.appendChild(divCardContent);
    divCardHijo.appendChild(divCardReveal);

    divCardPadre.appendChild(divCardHijo);

    var idCard = marca + modelo;
    idCard = idCard.replace(/\s/g, '');

    divCardPadre.id = idCard.trim();

    if (document.querySelector("#" + idCard)) {
        console.log("Ya existe");
    } else {
        const lanzar = document.querySelector("div#contenidoAdd");
        lanzar.appendChild(divCardPadre);
    }



}




function Agregar() {
    var marca = document.querySelector("#selectMarca").value;
    var modelo = document.querySelector('.id-modelo').value;
    var anio = document.querySelector('.id-anio').value;
    var precio = document.querySelector('.id-precio').value;
    var tipoVehiculo = document.querySelector("#selectedTV").value;
    var uso = document.querySelector("#selectedEV").value;
    var nPuertas = document.querySelector('.id-nPuertas').value;



    agregarCC(marca, modelo, anio, precio, tipoVehiculo, uso, nPuertas);

}

function Elimi() {
    var inputValue = document.querySelector("#selectMarca").value;
    console.log(inputValue);
    var inputValue = document.querySelector('.id-modelo');
    console.log(inputValue.value);
    var inputValue = document.querySelector('.id-anio');
    console.log(inputValue.value);
    var inputValue = document.querySelector('.id-precio');
    console.log(inputValue.value);
    var inputValue = document.querySelector("#selectedTV").value;
    console.log(inputValue);
    var inputValue = document.querySelector("#selectedEV").value;
    console.log(inputValue);
    var inputValue = document.querySelector('.id-nPuertas');
    console.log(inputValue.value);


}


function Modificar() {
    var marca = document.querySelector("#selectMarca").value;
    var modelo = document.querySelector('.id-modelo').value;
    var anio = document.querySelector('.id-anio').value;
    var precio = document.querySelector('.id-precio').value;
    var tipoVehiculo = document.querySelector("#selectedTV").value;
    var uso = document.querySelector("#selectedEV").value;
    var nPuertas = document.querySelector('.id-nPuertas').value;

    var idCard = marca + modelo;
    idCard = idCard.replace(/\s/g, '');


    document.querySelector("#" + idCard + " div div.card-reveal p.modelo").innerText = "Modelo: " + modelo;
    document.querySelector("#" + idCard + " div div.card-reveal p.anio").innerText = "Año: " + anio;
    document.querySelector("#" + idCard + " div div.card-reveal p.precio").innerText = "Precio: " + precio;
    document.querySelector("#" + idCard + " div div.card-reveal p.tipoVehiculo").innerText = "Tipo Vehiculo: " + tipoVehiculo;
    document.querySelector("#" + idCard + " div div.card-reveal p.uso").innerText = "Estado Vehiculo: " + uso;
    document.querySelector("#" + idCard + " div div.card-reveal p.nPuertas").innerText = "Numero De Puertas: " + nPuertas;


}






function Eliminar() {
    var marca = document.querySelector("#selectMarca").value;
    console.log(marca);
    var modelo = document.querySelector('.id-modelo').value;
    console.log(modelo.value);

    var idCard = marca + modelo;
    idCard = idCard.replace(/\s/g, '');
    console.log(idCard);

    document.getElementById(idCard).remove();
}




function Buscar() {
    var marca = document.querySelector("#selectMarca").value;
    console.log(marca);
    var modelo = document.querySelector('.id-modelo').value;
    console.log(modelo.value);

    var idCard = marca + modelo;
    idCard = idCard.replace(/\s/g, '');

    
    var elmnt = document.getElementById(idCard);
    elmnt.scrollIntoView();
  }
