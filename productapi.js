document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const addProductForm = document.getElementById("add-product-form");
    const productNameInput = document.getElementById("product-name");
    const productDescriptionInput = document.getElementById("product-description");
    const productPriceInput = document.getElementById("product-price");

    // URL API dari PokeAPI (contoh)
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    // Fungsi untuk mengambil data dari API
    async function fetchProducts() {
        try {
            const response = await fetch(apiUrl);
            const products = await response.json();

            // Loop melalui data produk dan tampilkan di halaman HTML
            products.results.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                const h2 = document.createElement("h2");
                h2.textContent = product.name;

                // Tambahkan elemen lain seperti gambar, deskripsi, dan harga sesuai API yang digunakan

                productCard.appendChild(h2);
                // Tambahkan elemen lain ke dalam productCard

                productGrid.appendChild(productCard);
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // Panggil fungsi untuk mengambil data produk dari API
    fetchProducts();

    // Fungsi untuk mencari produk berdasarkan nama
    function searchProduct() {
        const searchTerm = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll(".product-card");

        productCards.forEach((productCard) => {
            const productName = productCard.querySelector("h2").textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                productCard.style.display = "block";
            } else {
                productCard.style.display = "none";
            }
        });
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener("click", searchProduct);

    // Fungsi untuk menambah produk
    function addProduct(event) {
        event.preventDefault();
        const name = productNameInput.value;
        const description = productDescriptionInput.value;
        const price = parseFloat(productPriceInput.value);

        // Validasi data input

        // Kirim data produk ke API (contoh: menggunakan metode POST)

        // Setelah berhasil menambah produk, tampilkan produk baru di daftar
    }

    // Event listener untuk form tambah produk
    addProductForm.addEventListener("submit", addProduct);
});
