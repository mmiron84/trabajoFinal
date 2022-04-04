

function botonUser(data){

    let botonusuario=document.querySelector("#cambiarUsuario");
    botonusuario.addEventListener("click", ()=>cargaUsuario());
    }



    
 function cargaUsuario (){
url="https://randomuser.me/api/"
 fetch(url)
.then((res)=>res.json())
.then((data)=>{

    mostrarContenido(data);
});
}



function mostrarContenido(usuario)
{

let nodo = document.querySelector("#usuarios")
nodo.style.fontStyle="italic";
nodo.style.fontWeight="1000";
nodo.innerHTML=`
<img src ="${usuario.results[`0`].picture.large}" width="100px" class="img-fluid rounded-circle" >
<p>usuario:${usuario.results[`0`].login.username}<\p>
<p>password:${usuario.results[`0`].login.password}<\p>`



};

