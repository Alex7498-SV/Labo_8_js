
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];

var formulario = document.getElementById("bitacora");
console.log(formulario);

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        desc: formulario[2].value,
        cantid: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

const crearEle = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 


   
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearEle(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 


var fecha = document.getElementById("fecha");
fecha.oninput = () => {
   var valor = fecha.value;
   if(valor == "" || valor == null){
     fecha.style.borderColor = "red";
   }else{
     fecha.style.borderColor = "green";
   }
} 


descp

var descp = document.getElementById("descp");
descp.oninput = () => {
   var valor = descp.value;
   if(valor == "" || valor == null){
     descp.style.borderColor = "red";
   }else{
     descp.style.borderColor = "green";
   }
} 

var c = document.getElementById("cant");
c.oninput = () => {
   var valor = c.value;
   if(valor == "" || valor == null){
     c.style.borderColor = "red";
   }else{
     c.style.borderColor = "green";
   }
} 
console.log(bitacoras);


