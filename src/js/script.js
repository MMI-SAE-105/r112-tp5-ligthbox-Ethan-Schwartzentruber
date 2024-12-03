// *** LIGHTBOX ***
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("ul li img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");

    // Ouvre la LightBox
    images.forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.getAttribute("data-full-img");
            lightbox.showModal();
        });
    });

    // Ferme la LightBox en cliquant à l'extérieur de l'image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.tagName !== "IMG") {
            lightbox.close();
        }
    });
});
