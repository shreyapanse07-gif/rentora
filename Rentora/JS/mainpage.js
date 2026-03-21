let buttons = document.querySelectorAll(" button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Directing you to the product page...");
    });
});