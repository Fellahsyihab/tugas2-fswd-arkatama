// Data produk dalam bentuk array/object
const products = [
    {
        name: "Sate Padang (Daging As)",
        image: "assets/images/satepadang.png",
        description: "Sate Padang Daging As + Lontong",
        price: "Rp25.000,00"
    },
    {
        name: "Sate Padang (Ayam)",
        image: "assets/images/satepadang.png",
        description: "Sate Padang Daging Ayam + Lontong",
        price: "Rp23.000,00"
    },
    // Tambahkan produk lainnya di sini
    {
        name: "Soto Padang",
        image: "assets/images/sotopadang.png",
        description: "bisa tambah nasi",
        price: "Rp15.000,00"  
    },
    {
        name: "Nasi Uduk",
        image: "assets/images/nasiuduk.png",
        description: "-",
        price: "Rp10.000,00"
    },
    {
        name: "Gado-gado Padang",
        image: "assets/images/gadogado.png",
        description: "bumbu kacang khas padang",
        price: "Rp13.000,00"
    },
    {
        name: "Nasi Goreng",
        image: "assets/images/nasigoreng.png",
        description: "-",
        price: "Rp18.000,00"
    },
    {
        name: "Es Teh",
        image: "assets/images/esteh.png",
        description: "-",
        price: "Rp5000,00"
    }
];

// Fungsi untuk menambahkan produk ke dalam grid
function addProductsToGrid() {
    const productGrid = document.querySelector(".product-grid");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = product.price;

        const productLink = document.createElement("a");
        productLink.href = "#";
        productLink.textContent = "Selengkapnya";

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);
        productCard.appendChild(productLink);

        productGrid.appendChild(productCard);
    });
}

// Panggil fungsi untuk menambahkan produk ke dalam grid saat halaman dimuat
window.onload = addProductsToGrid;
