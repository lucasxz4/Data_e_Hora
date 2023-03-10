let Data = document.querySelector(".data"); // Variável para ligação do botão (data).
let Hora = document.querySelector(".hora"); // Variável para ligação do botão (hora).
const data = new Date().toLocaleDateString(); // Data
const hora = new Date().toLocaleTimeString(); // Hora

Data.addEventListener('click', function() {
    alert("Hoje é " + data);
})

Hora.addEventListener('click', function() {
    alert("Agora, são " + hora);
})