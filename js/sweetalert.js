function faltaTareaFecha(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo tarea o Fecha en blanco',
        
      })
}

function faltaI(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falto Ingresar la fecha!',
        
      })
}


function fechaIncorrecta(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fecha Incorrecta',
        
      })
}

function errorID(){
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'ID incorrecto',
      
    })
}