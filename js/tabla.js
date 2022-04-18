// genero la funcion agregaTarea para cargar en la tabla mis objetos

function agregaTareas(){
        // declaro nodoTarea en el cual selecciono donde voy a pegar la tabla
        const nodoTarea = document.getElementById("divListaTareas");
        nodoTarea.innerHTML="";
        // creo el nodo tabla
        const table = document.createElement("table");
        // le agrego los atributos id y class
        table.setAttribute("id", "listadetareas");
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
         // recorro con forEach arrayTareas y cargando los valores ingresados
        arrayTareas.forEach((tarea)=>{
                const tr = document.createElement("tr");
                tr.class=`fila`;
                tr.innerHTML=`<td>${tarea.descripcion}</td>
                        <td>${tarea.id}</td>  
                                <td>${tarea.estado}</td>
                                <td>${tarea.fechaFinal}</td>`;
                tr.setAttribute("id","tareita")  
                tr.style.alignItems="center";             
                tr.style.padding="20px";    
                tr.style.color="white";
                tr.setAttribute("draggable", "true");
                tbody.appendChild(tr);
                // le doy la propiedad a cada fila de que sea arrastrable       
        })
        
        // pego la tabla en el Tbody
        //pego la tabla en el nodoTarea 
        table.appendChild(tbody);
        nodoTarea.appendChild(table);
        }
        
        
        
        