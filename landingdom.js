// landing.js
document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function initCarousel() {
        showProduct(currentIndex);
        prevButton.addEventListener("click", prevProduct);
        nextButton.addEventListener("click", nextProduct);
    }

    function showProduct(index) {
        productCards.forEach((card) => {
            card.style.display = "none";
        });
        productCards[index].style.display = "block";
    }

    function prevProduct() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = productCards.length - 1;
        }
        showProduct(currentIndex);
    }

    function nextProduct() {
        currentIndex++;
        if (currentIndex >= productCards.length) {
            currentIndex = 0;
        }
        showProduct(currentIndex);
    }

    initCarousel();
});
