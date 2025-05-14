<?php
// Konfigurasi koneksi ke database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kontak_db"; // Ganti jika nama database kamu berbeda

// Membuat koneksi
$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form (dikirim via AJAX)
$nama = isset($_POST['nama']) ? trim($_POST['nama']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$handphone = isset($_POST['handphone']) ? trim($_POST['handphone']) : '';
$pesan = isset($_POST['pesan']) ? trim($_POST['pesan']) : '';

// Validasi sederhana di server (opsional tapi disarankan)
if ($nama == "" || $email == "" || $handphone == "" || $pesan == "") {
    echo "Semua kolom wajib diisi.";
    exit;
}

// Lindungi dari SQL injection
$nama = $conn->real_escape_string($nama);
$email = $conn->real_escape_string($email);
$handphone = $conn->real_escape_string($handphone);
$pesan = $conn->real_escape_string($pesan);

// Query insert
$sql = "INSERT INTO kontak (nama, email, handphone, pesan) VALUES ('$nama', '$email', '$handphone', '$pesan')";

if ($conn->query($sql) === TRUE) {
    echo "Pesan berhasil dikirim!";
} else {
    echo "Gagal menyimpan data: " . $conn->error;
}

// Tutup koneksi
$conn->close();
?>
