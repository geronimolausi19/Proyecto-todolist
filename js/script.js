// punto 8 a las 8:30

// OBTUVIMOS
let input = document.querySelector(".input")
let botonAgregar= document.querySelector(".boton_agregar")
let container = document.querySelector(".container")





class item {
    constructor(valueItem){
this.crearDiv(valueItem)
    }
    // INPUT
   crearDiv(valueItem){

 let inputItem= document.createElement("input")
inputItem.value=valueItem
inputItem.disabled=true
inputItem.classList.add("inputItem")
inputItem.type="text"


// EL DIV
let div= document.createElement("div")
console.log(div)
div.classList.add("item")


//ID

// BOTON EDITAR
let botonEditar=document.createElement("button")
botonEditar.innerHTML= `<i class="fas fa-lock"></i>`
botonEditar.classList.add("boton_editar")
// BOTON REMOVER
let botonRemover= document.createElement("button")
botonRemover.innerHTML= `<i class="fas fa-trash"></i>`
botonRemover.classList.add("boton_remover")


    // AGREGANDO A LISTA

div.appendChild(inputItem)
div.appendChild(botonEditar)
div.appendChild(botonRemover)
container.appendChild(div)

//LOGICA

botonEditar.addEventListener("click",function(){
    
    if(inputItem.disabled==true){
   
        botonEditar.innerHTML=`<i class="fas fa-lock-open"></i>`
       inputItem.disabled=false
       inputItem.style.backgroundColor = "none"
   

    }else {
        
            botonEditar.innerHTML= `<i class="fas fa-lock"></i>`
            inputItem.disabled=true 

        }
        

     
   
    
})

botonRemover.addEventListener("click",function(e){

   container.removeChild(div)




})

}

}

botonAgregar.addEventListener("click",function(){


let text = input.value

 function chequearInput(input){
    if(text !== "") {
        let tarea1= new item(input.value)
        console.log(tarea1)
     }else{
         botonAgregar.classList.remove("boton_agregar:hover")
     }
    
 }
 chequearInput(input) 

 input.value=""
})

    






