const añadir = document.querySelector('input');
const otraTarea = document.querySelector('.listado');
const btn = document.querySelector('i');
const total = document.querySelector('#total');
const realizado = document.querySelector('#realizado');

const tareas = [
    {
        id: 1,
        nombre: 'Entrar en la página web',
        completed: false,
    },
    {
        id: 2,
        nombre: 'Admirar la web',
        completed: false,
    },
    {
        id: 3,
        nombre: 'Comenzar a crear a tareas',
        completed: false,
    },
]

btn.addEventListener('click', () => {
    if (añadir.value === '') return;
    tareas.push({id: Date.now(), nombre: añadir.value});
    añadir.value = ''
    arrayTasks()
})

const cambioEstado = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea){
        tarea.completed = !tarea.completed
        arrayTasks ()
    }
}

const eliminar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index, 1);
    arrayTasks()
}

const arrayTasks = () => {
    const html = tareas.map(tarea => `
        <div class="contenido">
        <p class="id">${tarea.id}</p>
        <p>
        <span id="seleccion" class="${tarea.completed ? 'completed' : ''}" onclick="cambioEstado(${tarea.id})"> ${tarea.nombre}</span>
        <i id="borrar" class="fa-solid fa-circle-xmark" onclick="eliminar(${tarea.id})"></i>
        </p>
        </div>
        `).join('')

        const contar = tareas.filter(tarea => tarea.completed).length
        const contarTotal = tareas.filter(tarea => tarea.nombre).length
        otraTarea.innerHTML = html
        realizado.innerHTML = contar
        total.innerHTML = contarTotal
}

arrayTasks ()