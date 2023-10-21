document.addEventListener("DOMContentLoaded", () => {
    const playerNameInput = document.getElementById("playerName");
    const registerButton = document.getElementById("register");
    
    registerButton.addEventListener("click", () => {
        const playerName = playerNameInput.value;
    
        if (playerName) {
            // Save the player's name to local storage
            localStorage.setItem("playerName", playerName);
    
            // Redirect to game.html after registration
            window.location.href = "game.html";
        }
    });
});
