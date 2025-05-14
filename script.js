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
  $(".btnform").click(function (e) {
    e.preventDefault(); // Mencegah reload

    let valid = true;
    $(".error").text(""); // Bersihkan error sebelumnya

    const nama = $("#nama").val().trim();
    const email = $("#email").val().trim();
    const handphone = $("#handphone").val().trim();
    const pesan = $("#pesan").val().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    // Validasi
    if (nama === "") {
      $("#error-nama").text("Nama wajib diisi.");
      valid = false;
    }

    if (email === "") {
      $("#error-email").text("Email wajib diisi.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      $("#error-email").text("Format email tidak valid.");
      valid = false;
    }

    if (handphone === "") {
      $("#error-handphone").text("Nomor handphone wajib diisi.");
      valid = false;
    } else if (!phonePattern.test(handphone)) {
      $("#error-handphone").text("Nomor handphone harus berupa angka dan 10-15 digit.");
      valid = false;
    }

    if (pesan === "") {
      $("#error-pesan").text("Pesan wajib diisi.");
      valid = false;
    }

    // Kirim via AJAX ke proses.php jika valid
    if (valid) {
      $.ajax({
        url: "proses.php",
        method: "POST",
        data: {
          nama: nama,
          email: email,
          handphone: handphone,
          pesan: pesan
        },
        success: function (response) {
          alert(response); // Menampilkan respons dari proses.php
          // Reset form jika berhasil
          $("#nama, #email, #handphone, #pesan").val("");
        },
        error: function () {
          alert("Terjadi kesalahan saat mengirim data.");
        }
      });
    }
  });
});
