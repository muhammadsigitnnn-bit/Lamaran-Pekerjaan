// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Jika foto gagal dimuat, tampilkan pesan
const foto = document.getElementById('foto');
const frame = foto.closest('.photo-frame');
foto.addEventListener('error', () => frame.classList.add('no-photo'));
if (foto.complete && foto.naturalWidth === 0) frame.classList.add('no-photo');

// Tombol cetak / simpan PDF
document.getElementById('printBtn').addEventListener('click', () => window.print());

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();