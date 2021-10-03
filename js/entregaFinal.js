
let valorCuotas = 0;

let inputId="";
let inputPrecio ="";          
let inputCuotas ="";
let inputInflacion ="";
let inputDolar =""; 

/*Funcion que realiza los calculos*/
function datos() {  
    let inputId = document.getElementById('compra').value;
    let inputPrecio = document.getElementById('precio').value;
    let inputCuotas = document.getElementById('cuotas').value;
    let inputInflacion = document.getElementById('inflacion').value;
    let inputDolar = parseFloat(document.getElementById('dolar').value);

    valorCuotas = inputPrecio / inputCuotas;
    valorCuotas = +valorCuotas.toFixed(1);

    if(inputCuotas==6){
        productShare=6;
        valorInflacion = inputInflacion / 2;
    } else {
        productShare=12;
        valorInflacion = inputInflacion;
    }
    if((inputCuotas==6 && valorInflacion>=10) || (inputCuotas==12 && valorInflacion>=20)){
        cuotificar=true;

    } else {
        cuotificar=false;
    }
    
    /*Se proyecta el dolar segun la inflacion*/
    parseFloat(valorDolar = (inputDolar*valorInflacion/100)); 
    valorDolar = valorDolar+inputDolar;
    valorDolar = +valorDolar.toFixed(1);

    /*Se almacenan los datos en el session*/
    sessionStorage.setItem('cuotifica', cuotificar);
    sessionStorage.setItem('compra', inputId);
    sessionStorage.setItem('precio', inputPrecio);
    sessionStorage.setItem('cuotas', inputCuotas);
    sessionStorage.setItem('cadaCuota', valorCuotas);
    sessionStorage.setItem('inflacion', valorInflacion);
    sessionStorage.setItem('dolar', valorDolar);
    
    productId=inputId;
    productPrice=inputPrecio;
}

/*Funcion que muestra los mensajes correspondientes con JQuery*/
function mensajes(){     
    $("#idCompra").html(`<span><h4>`+productId);
    $("#precioProd").html(`<span><h4>Precio: $`+productPrice);
    $("#cantCuotas").html(`<span><h4>Cantidad de cuotas: </span>`+productShare);
    $("#calculoCuotas").html(`<span><h4>Valor de cada cuota: $</span>`+valorCuotas);
    $("#calculoInflacion").html(`<span><h4>Porcentaje de inflacion: `+valorInflacion+`%</span>`);
    $("#dolarBlue").html(`<span><h4>Dolar blue proyectado: $</span>`+valorDolar); 
}

/*Funcion que muestra el historial (por ahora por consola)*/
function historial() {
 for(i=0; i<sessionStorage.length; i++) {
     console.log(sessionStorage.getItem('cuotifica'),
                sessionStorage.getItem('compra'),
                sessionStorage.getItem('precio'),
                sessionStorage.getItem('cuotas'),
                sessionStorage.getItem('cadaCuota'),
                sessionStorage.getItem('inflacion'),
                sessionStorage.getItem('dolar'));
 }
}

/*Funcion que indica si cuotificar o no con JQuery*/
function mostrarCuotificar() {                                                             
    if(cuotificar==true){
        $("#cuotificar").html(` <div class="cardLogo">
                                    <img src="css/logos_img/Logos Cards/Card.svg">
                                </div>
                                <h2>La mejor opción es pagar en cuotas</h2>`);
    } else {
        $("#cuotificar").html(` <div class="cardLogo">
                                    <img src="css/logos_img/Logos Cards/pesos.svg">
                                </div>
                                <h2>La mejor opción es pagar de contado</h2>`);
    }
}

/*Funcion que hace el fade in de la card con la data del calculo*/
$("#calcularBtn").click(() => {
    $(".infoCard").fadeIn(0);
});