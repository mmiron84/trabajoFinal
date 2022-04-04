// cargo la funcion init() y todos las funciones necesarias en js
function init()
 {   
    precarga();
    datosGuardados()
    programarInput();
    programarInputId();
    programarBotones();
    botonUser();

}


function programarBotones()
{
    programarBotonGuardarTarea();
    programarBotonBorrarTarea();
    programarBotonRealizada();
}

//funcion para programar el boton guardar tarea
function programarBotonGuardarTarea()
{
    const guardarBtn=
    document.querySelector("#guardarTareaBtn");
        guardarBtn.addEventListener("click", ()=>{
//llamo a la funcion guardar tarea        
            guardarTarea();
        })
}

// funcion guardar tarea 
function guardarTarea()
{
// declaro la constante ValorTarea para que guarde lo que tengo en ingresarTareaInput    
    const valorTarea = 
    document.querySelector("#ingresarTareaInput").value;
    const valorFecha = 
    document.querySelector("#fechaLimite").value;
// valido si el campo esta vacio
    if(valorTarea.trim() ==="" || valorFecha.trim()==="")
    {
    faltaTareaFecha();    
    }
    else
    {
        
        // guardo en la variable hoy la fecha actual
        const hoy = new Date();
        //genero el string separado por -
        const fechaFormato = valorFecha.split("-");
        // guardo en fecha limite la cadena con el formato correcto
        fechaLimite= new Date(fechaFormato[0],fechaFormato[1]-1,fechaFormato[2]); 
        // paso las dos variables a milisegundos para poder compararlas y determinar si la fecha de la tarea esta correcta
        const hoyMili= hoy.getTime();
        const tareaMili=fechaLimite.getTime();
        // genero la comparacion de la fecha si esta mal le indico y de lo contrario guardo la tarea
        if(tareaMili<hoy)
            {
            fechaIncorrecta();
            }
        //valido nuevamente para que la palabra ingrese tarea no sea tomada como una tarea
        else if(valorTarea.trim() !=="ingrese una tarea")
            {
                const nuevaTarea = {
                descripcion:valorTarea,
                id:arrayTareas.length!==0? arrayTareas[arrayTareas.length-1].id+1:1, 
                estado:false, 
                fechaFinal :`${fechaFormato[2]}/ ${fechaFormato[1]} / ${fechaFormato[0]} `,
                draggable:`true`
                }
        // Agrego Toastifu para avisar que la tarea a sido guardada
                Toastify({
                    text: "Su tarea a sido guardada",
                    duration:3000,
                    style: {
                        background: 'linear-gradient(to right, #00b09b, #96c92d)'
                    },
                    offset: {
                        x: 100, 
                        y: 300 
                    }
            

                }).showToast();
            arrayTareas.push(nuevaTarea);
            document.querySelector("#ingresarTareaInput").value="";
            }
            else
            {
            faltaTarea();
            }
    }
//llamo a la funcion agregarTareas() que esta en tabla.js 
agregaTareas();
datosGuardados();

}


function programarInput()
{
    //  programarInputTarea();
    const input = document.querySelector("#ingresarTareaInput");
    input.addEventListener("focus", (e)=>{
   // aplico operador avanzado AND     
        e.target.value===`ingrese una tarea` && (input.value="");
    
    })

    input.addEventListener("blur", (e)=>{
    //aplico operador avanzado AND    
        e.target.value===`` && (e.target.value="ingrese una tarea");
    })

}

//Funcion que programa el boton Borrar
function programarBotonBorrarTarea()
{
const borrarBtn=
document.querySelector("#borrarTareaBtn");
    borrarBtn.addEventListener("click", ()=>{
//llamo a la funcion borrar tarea
        borrarTarea();       
        
    });
}

// funcion Borrar Tarea
function borrarTarea()
{
const idBorrar= parseInt(document.querySelector("#ingresarIdInput").value);

// valido si el index es mas grande que el largo del array
const tareaborrar = arrayTareas.find(tarea =>tarea.id===idBorrar)
if(!tareaborrar)
    {
// llamado a la funcion que contiene SweetAlert2
        errorID();
    }
    else
    {
    const arrayAux = arrayTareas.map(tarea=>tarea.id);
    const index = arrayAux.indexOf(idBorrar);
    arrayTareas.splice(index,1);
    }
    Toastify({
        text: "La tarea a sido borrada",
        duration:3000,
        style: {
        background: 'linear-gradient(to right, #00b09b, #96c92d)'
        },
        offset: {
            x: 100, 
            y: 300 
        }


    }).showToast();
    agregaTareas();  
    datosGuardados();

}


//utilizo JSON para poder guardar mis datos en localStorage
function datosGuardados()
{
    localStorage.setItem("tareas", JSON.stringify(arrayTareas));
}


function precarga()
{
    if(localStorage.getItem("tareas")!=null)
{
    arrayTareas = 
    JSON.parse(localStorage.getItem("tareas"));
}            
}

// funcion que realiza la configuracion de boton tarea ralizada
function programarBotonRealizada()
{
    realizadaBtn=
    document.querySelector("#botonRealizada");
    realizadaBtn.addEventListener("click",()=>{
        tareaRealizada();

    })
}

function tareaRealizada()
{
    const idRealizada= parseInt(document.querySelector("#ingresarIdInput").value);
    const tareaRealizada = arrayTareas.find (tarea => tarea.id===idRealizada)
    if(idRealizada)
    {
        let celda =arrayTareas[idRealizada-1].descripcion;
        arrayTareas[idRealizada-1].fechaFinal ="TERMINADA";
        arrayTareas[idRealizada-1].estado="true";
        arrayTareas[idRealizada-1].estado="true";
        agregaTareas();  
        datosGuardados();
        
    }

}



//  funcion para programar el input del boton ID
function programarInputId()
{
    const id= document.getElementById("ingresarIdInput");
    id.addEventListener("focus", (e)=>{
    // aplico operador avanzado AND
        e.target.value===`ingrese id` && (e.target.value="");
    
    })
    id.addEventListener("blur", (e)=>{
// aplico operador avanzado AND
        e.target.value===`` && (e.target.value="ingrese id");
    })
}


