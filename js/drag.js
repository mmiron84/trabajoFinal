function drag()
{
const tareasLista= document.querySelector(`#divListaTareas`)
tareasLista.addEventListener(`dragstart`,e=>{
    e.dataTransfer.setData("text",tareita);
    
});

const tareasListas= document.querySelector(`#tareaTerminada`);
tareasListas.addEventListener(`dragover`, e =>{
    e.preventDefault();
    console.log(`Dragover`)
})

tareasListas.addEventListener(`drop`, e =>{
    tareita.style.color="blue";
    tareasListas.appendChild(tareita)
    

})


// divListaTareas.addEventListener(`dragstart`, e => {

//     e.dataTransfer.setData("text/plain",e.target.id);
// //     console.log(id)
// })



}





