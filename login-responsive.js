// Ambil elemen-elemen yang dibutuhkan
const loginForm = document.querySelector('.login');
const rightColumn = document.querySelector('.right');
const videoContainer = document.querySelector('.video-container');

// Fungsi untuk mengecek lebar layar dan mengatur tampilan responsif
function checkResponsiveLayout() {
    if (window.innerWidth >= 768) {
        // Layar lebar (lebar minimum 768px)
        loginForm.style.flex = '1';
        rightColumn.style.flex = '1';
        rightColumn.style.textAlign = 'center';
    } else {
        // Layar lebih kecil
        loginForm.style.flex = 'none';
        rightColumn.style.flex = 'none';
        rightColumn.style.textAlign = 'center';
    }
}

// Panggil fungsi checkResponsiveLayout saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener('load', checkResponsiveLayout);
window.addEventListener('resize', checkResponsiveLayout);
