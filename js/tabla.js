// genero la funcion agregaTarea para cargar en la tabla mis objetos

function agregaTareas(){
// declaro notoTarea en el cual selecciono donde voy a pegar la tabla
const nodoTarea = document.getElementById("divListaTareas");
nodoTarea.innerHTML="";
// creo el nodo tabla
const table = document.createElement("table");
// le agrego los atributos id y class
table.setAttribute("id", "lista de tareas");
table.setAttribute("class", "table table-hover table-bordered");

// genero el encabezado de la tabla
table.innerHTML=`<thead>
        <tr>
        <th>Descripcion</th>
        <th>Id</th>
        <th>Estado</th>
        <th>Fecha Limite</th>
        </tr>
        </thead>`;
// genero el cuerpo de la tabla
        const tbody = document.createElement("tbody");
        // const ultimoRegistro = agregaTareas[agregaTareas.lenght-1]
        // const nuevoId = ultimoRegistro.id + 1
// recorro con forEach arrayTareas y cargando los valores ingresados
        arrayTareas.forEach((tarea)=>{
        const tr = document.createElement("tr");
        tr.innerHTML=`<td>${tarea.descripcion}</td>
                        <td>${tarea.id}</td>  
                        <td>${tarea.estado}</td>
                        <td>${tarea.fechaFinal}</td>`;
        tbody.appendChild(tr);
        })
// pego la tabla en el Tbody
//pego la tabla en el nodoTarea 
table.appendChild(tbody);
nodoTarea.appendChild(table);
}



