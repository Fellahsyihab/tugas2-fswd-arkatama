// Fungsi untuk menampilkan pesan ketika tombol "New Product" diklik
function showNewProductMessage() {
  alert("Anda akan membuat produk baru!");
}

// Menambahkan event listener untuk tombol "New Product"
const newProductButton = document.querySelector('.nav-link');
newProductButton.addEventListener('click', showNewProductMessage);

// Fungsi untuk mengubah warna latar belakang dashboard secara acak
function changeDashboardBackground() {
  const colors = ["#FCE09B", "#F5E8B7", "#EAD7BB", "#E9B824", "#FFCC70"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.content-wrapper').style.backgroundColor = randomColor;
}

// Mengubah warna latar belakang dashboard setiap 5 detik
setInterval(changeDashboardBackground, 5000);
