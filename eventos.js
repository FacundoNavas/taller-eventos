const buttonDiv = document.getElementById('buttonDiv');
buttonDiv.addEventListener('click', function () {
    alert("Hola! soy el div");
});

function saludar(event) {
    alert("Hola!");
    event.stopPropagation(); // Evita la propagación del evento
}