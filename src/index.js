

const imagenes = 'https://randomfox.ca'

const isIntersecting =(entry)=>{
    return entry.isIntersecting;
}

const loadImage = (entry)=>{
    const nodo = entry.target;
    const url =  nodo.dataset.src;
    nodo.src=url
    observador.unobserve(nodo)
   
    
   
    
    
}
const observador = new IntersectionObserver((entradas)=>{
    entradas.filter(isIntersecting).forEach(loadImage)

})

function registrarImg(contenedor) {
    
    observador.observe(contenedor)
}



function generadorImagenes(){
    const imagen = document.createElement('img');
    const contenedor = document.querySelector('.conteiner')
    const numberRamdom = Math.floor(Math.random() * (123 - 1)+1)
    imagen.dataset.src = `${imagenes}/images/${numberRamdom}.jpg`;
    imagen.className='imagenAgregadas'
    const agregada=contenedor.appendChild(imagen);
    return agregada,registrarImg(agregada);
      
}

const addbutton = document.querySelector('.AddButton');

addbutton.addEventListener("click" , generadorImagenes)

