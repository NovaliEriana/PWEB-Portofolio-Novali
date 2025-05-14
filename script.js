document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
});

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Hapus semua class active
    navLinks.forEach(l => l.classList.remove('active'));
    // Tambahkan class active ke link yang diklik
    this.classList.add('active');
  });
});

$(document).ready(function () {
  // Tangani event klik pada tombol Kirim
  $(".btnform").click(function (e) {
    e.preventDefault(); // Mencegah aksi default (jika nanti pakai form)

    let valid = true;

    // Reset error
    $(".error").text("");

    const nama = $("#nama").val().trim();
    const email = $("#email").val().trim();
    const handphone = $("#handphone").val().trim();
    const pesan = $("#pesan").val().trim();

    // Validasi nama
    if (nama === "") {
      $("#error-nama").text("Nama wajib diisi.");
      valid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      $("#error-email").text("Email wajib diisi.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      $("#error-email").text("Format email tidak valid.");
      valid = false;
    }

    // Validasi handphone
    const phonePattern = /^[0-9]{10,15}$/;
    if (handphone === "") {
      $("#error-handphone").text("Nomor handphone wajib diisi.");
      valid = false;
    } else if (!phonePattern.test(handphone)) {
      $("#error-handphone").text("Nomor handphone harus berupa angka dan 10-15 digit.");
      valid = false;
    }

    // Validasi pesan
    if (pesan === "") {
      $("#error-pesan").text("Pesan wajib diisi.");
      valid = false;
    }

    if (valid) {
      alert("Formulir berhasil dikirim!");
      // Tambahkan pengiriman data via AJAX jika perlu
    }
  });
});
