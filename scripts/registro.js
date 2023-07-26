document.getElementById("botonForm").addEventListener("click", function() {
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const checkbox = document.getElementById('checkCondiciones');

    if (nombre && email && password && password2 && checkbox.checked) {
        if (password === password2) {
            window.location.href = '../index.html';
            alert('Su usuario ha sido registrado con éxito');
        } else {
            alert('Las contraseñas no coinciden. Por favor, corroborá que sean iguales.');
        }
    } else {
        alert('Por favor, rellená todos los campos y aceptá los términos y condiciones.');
    }
});