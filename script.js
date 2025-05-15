function openLetter() {
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    document.querySelector(".letter").style.transform = "translateY(-80px)";
    
    createHearts(); // Llamamos a la función que genera corazones
}

function closeLetter() {
    document.querySelector(".flap").style.transform = "rotateX(0deg)";
    document.querySelector(".letter").style.transform = "translateY(100%)";
}

// Función para generar corazones flotando
function createHearts() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 100; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "​​​🌷​​";

        // Posición aleatoria en la pantalla
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${50 + Math.random() * 30}%`;

        // Tamaño aleatorio
        let size = Math.random() * 20 + 10; 
        heart.style.fontSize = `${size}px`;

        // Duración de la animación aleatoria
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;

        container.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

