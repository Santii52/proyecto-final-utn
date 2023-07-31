
document.addEventListener('DOMContentLoaded', function () {
    const botonEnviar = document.getElementById('botonForm');
    botonEnviar.addEventListener('click', function (event) {
        event.preventDefault(); 
        
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const soy = document.getElementById('soy').value;
        const tipoConsulta = document.getElementById('tipoConsulta').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !correo || !soy || !tipoConsulta || !mensaje) {
            alert('Completá todos los campos vacíos antes de enviar el formulario.');
        }
        else {
            alert('El formulario se ha enviado con éxito, en las próximas horas nos comunicaremos enviando un correo electrónico') 
        }
    });
});
