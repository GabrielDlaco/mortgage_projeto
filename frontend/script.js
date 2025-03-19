document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll(".radio-container input");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            document.querySelectorAll(".radio-container").forEach(container => {
                container.classList.remove("selected");
            });

            this.parentElement.classList.add("selected");
        });
    });
});
