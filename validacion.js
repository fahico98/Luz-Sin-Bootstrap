
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correoElect = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", (event) => {
   
   event.preventDefault();
   let error = "";

   nombre.style.borderColor = "gray";
   telefono.style.borderColor = "gray";
   correoElect.style.borderColor = "gray";
   mensaje.style.borderColor = "gray";

   if(nombre.value.length == 0){
      error = "Error: El nombre es obligatorio.";
      nombre.style.borderColor = "red";

   }else if(telefono.value.toString().length == 0){
      error = "Error: El telefono es obligatorio.";
      telefono.style.borderColor = "red";

   }else if(correoElect.value.length == 0){
      error = "Error: El correo eletrónico es obligatorio.";
      correoElect.style.borderColor = "red";

   }else if(mensaje.value.length == 0){
      error = "Error: El mensaje no puede estar vacío.";
      mensaje.style.borderColor = "red";

   }else if(nombre.value.length < 5 || nombre.value.length > 50){
      error = "Error: El nombre debe tener por lo menos 5 caracteres y máximo 50.";
      nombre.style.borderColor = "red";

   }else if(telefono.value < 0 || telefono.value > 9999999999){
      error = "Error: El numero de telefono no puede ser negativo y debe tener máximo 10 digitos.";
      telefono.style.borderColor = "red";

   }else if(correoElect.value.length < 5 || correoElect.value.length > 50){
      error = "Error: El correo electrónico debe tener por lo menos 5 caracteres y máximo 50.";
      correoElect.style.borderColor = "red";

   }else if(mensaje.value > 1000){
      error = "Error: El mensaje no debe tener mas de 1000 caracteres.";
      mensaje.style.borderColor = "red";

   }

   setTimeout(function(){
      if(!error){
         alert("Su mensaje ha sido enviado satisfactoriamente.\nGracias por comunicarse con nosotros.");
      }else{
         alert(error);
      }
   }, 10);
});


