const contenedor = document.getElementById('contenedor-eventos');
const arrayEventos = data.eventos;
let plantilla = '';


for (const evento of arrayEventos) {
  plantilla += crearEventos(evento);
}

contenedor.innerHTML = (plantilla);

function crearEventos(eventoSolo){
  return `<div class="card col-11 col-md-4 col-xl-3 ">
            <img id="imgCards" src="${eventoSolo.image}" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${eventoSolo.name}</h5>
              <p class="card-text"> Price: ${eventoSolo.description} </p>
              <div class = "div-precioBoton">
                <p class="card-text"> Price: ${eventoSolo.price} </p>
                <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
              </div>
            </div> 
          </div> 
`
}
