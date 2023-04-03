const contenedor = document.getElementById('contenedor-eventos');
const arrayEventos = filtrarEventos(data.eventos);
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
                <a href="./details.html" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div> 
`
}

function filtrarEventos(arrayDeObjetosFiltrados){
  const fechaActual = data.fechaActual;
  const eventosFiltrados = [];

  for (const evento of arrayDeObjetosFiltrados) {
    if(evento.date <= fechaActual){
      eventosFiltrados.push(evento);
    }
  }
  return eventosFiltrados;
}