document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validación básica
    const name = document.getElementById("name").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !reason || !email) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Simulación de envío exitoso
    alert(`¡Gracias por contactarme, ${name}! Te responderé pronto.`);
    this.reset();
});
