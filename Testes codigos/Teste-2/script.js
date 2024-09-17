// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões "Sim" e "Não" pelos seus IDs
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Adiciona um ouvinte de evento que dispara quando o mouse passa sobre o botão "Não"
    noButton.addEventListener('mouseover', function(event) {
        // Obtém o contêiner dos botões e suas dimensões
        const container = noButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        
        // Obtém as dimensões dos botões "Sim" e "Não"
        const yesButtonRect = yesButton.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Variáveis para as novas posições do botão "Não"
        let newLeft, newTop;

        // Tenta calcular novas posições até que o botão "Não" não se sobreponha ao botão "Sim"
        do {
            newLeft = Math.random() * (containerRect.width - noButtonRect.width);
            newTop = Math.random() * (containerRect.height - noButtonRect.height);
        } while (
            newLeft < yesButtonRect.right &&
            newLeft + noButtonRect.width > yesButtonRect.left &&
            newTop < yesButtonRect.bottom &&
            newTop + noButtonRect.height > yesButtonRect.top
        );

        // Define a posição do botão como absoluta e aplica as novas coordenadas calculadas
        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});
