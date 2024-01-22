let listaCards = [];
const crearCards = () => {
    for(let i = 0; i < cards.length; i++){
        listaCards.push({
            salaName : cards[i].getElementsByClassName("card-body")[0].getElementsByClassName("card-title")[0].innerHTML,
            showCard : true
        })
    }
}

const inputBuscador = document.getElementById("buscador");
const esVacio = (valor) => typeof valor === "string" && valor.length === 0;
const teclaEvt = (evt) => {
    evt.preventDefault();
    
    let valor = inputBuscador.value;
    if(!esVacio(valor)) {
        // console.log(valor);
        filtrarCartas(valor);
    }
}
inputBuscador.addEventListener("keyup", teclaEvt)

const filtrarCartas = (keyword) => {
    for(let i = 0; i < listaCards.length; i++){
        // if (!new RegExp(keyword, 'i').test(listaCards[i]["salaName"])){
        //     // console.log("coincide con " + listaCards[i]["salaName"]);
        //     listaCards[i]["showCard"] = false;
        // }
        listaCards[i]["showCard"] = (new RegExp(keyword, 'i').test(listaCards[i]["salaName"]))? true : false;
    }
    ponerCards();
}

const ponerCards = () => {
    for(let i = 0; i < listaCards.length; i++){
        if(listaCards[i]["showCard"]){
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

const root = document.getElementsByTagName("body")[0];
let cards = document.getElementById("tarjetas").getElementsByClassName("card");
(() => {
    // iniciar
    crearCards();

    // test
    let divTest = document.createElement("div");
    divTest.innerHTML = "test";
    divTest.setAttribute("class", "card");
    divTest.setAttribute("style", "font-size: 36pt; background-color: yellow; text-align: center");
    
    root.appendChild(divTest);
    console.log("test");
})();