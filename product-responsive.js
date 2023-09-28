// Ambil elemen-elemen yang dibutuhkan
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productGrid = document.getElementById('product-grid');
const addProductForm = document.getElementById('add-product-form');

// Daftar produk (contoh)
const products = [
    {
        name: 'Sate Padang (Daging As)',
        description: 'Sate Padang Daging As + Lontong',
        price: 'Rp25.000,00',
        image: 'assets/images/satepadang.png'
    },
    // ... Lanjutkan dengan produk lainnya ...
    {
        name: 'Sate Padang (Ayam)',
        description: 'Sate Padang Ayam + Lontong',
        price: 'Rp23.000,00',
        image: 'assets/images/satepadang.png'
    },
    {
        name: 'Soto Padang',
        description: 'bisa tambah nasi',
        price: 'Rp15.000,00',
        image: 'assets/images/sotopadang.png'
    },
    {
        name: 'Lontong Padang Gulai Toco/Lodeh',
        description: 'ada 2 pilihan gulai tauco & lodeh',
        price: 'Rp7.000,00',
        image: 'assets/images/lontongpadang.png'
    },
    {
        name: 'Nasi Uduk',
        description: '',
        price: 'Rp10.000,00',
        image: 'assets/images/nasiuduk.png'
    },
    {
        name: 'Gado-gado Padang',
        description: 'bumbu kacang khas padang',
        price: 'Rp13.000,00',
        image: 'assets/images/gadogado.png'
    },
    {
        name: 'Nasi Goreng',
        description: '',
        price: 'Rp18.000,00',
        image: 'assets/images/nasigoreng.png'
    },
    {
        name: 'Es Teh',
        description: '',
        price: 'Rp5.000,00',
        image: 'assets/images/esteh.png'
    },
];

// Fungsi untuk menampilkan produk
function displayProducts() {
    productGrid.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="Produk ${index + 1}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#">Selengkapnya</a>
        `;
        productGrid.appendChild(productCard);
    });
}

// Event listener untuk tombol cari
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchTerm);
    });
    if (filteredProducts.length > 0) {
        products = filteredProducts;
        displayProducts();
    } else {
        alert('Produk tidak ditemukan.');
    }
});

// Event listener untuk form tambah produk (contoh)
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;

    // Validasi data (bisa disesuaikan sesuai kebutuhan)

    if (!productName || !productDescription || !productPrice) {
        alert('Harap isi semua kolom.');
        return;
    }

    const newProduct = {
        name: productName,
        description: productDescription,
        price: `Rp${productPrice},00`,
        image: 'assets/images/default-product.png' // Ganti dengan URL gambar produk jika tersedia
    };

    products.push(newProduct);
    displayProducts();

    // Reset form
    addProductForm.reset();
});

// Tampilkan produk saat halaman dimuat
displayProducts();
