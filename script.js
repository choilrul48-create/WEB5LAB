console.log("Pesan di Console");
alert("Selamat belajar JavaScript!");

const nama = prompt("Siapa nama Anda?", "Nama mahasiswa");
console.log("Nama:", nama);
const elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Halo, JavaScript!";
function ubahTampilan() {
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("pesan").style.color = "blue";
  document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}

// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// 2. Menerima input dari pengguna menggunakan prompt
let inputA = prompt("Masukkan bilangan pertama (a):");
let inputB = prompt("Masukkan bilangan kedua (b):");

// 3. Mengonversi input teks (string) menjadi bilangan (number) menggunakan Number()
let bilanganA = Number(inputA);
let bilanganB = Number(inputB);

// 4. Memeriksa validasi input (apakah benar-benar angka atau bukan)
if (isNaN(bilanganA) || isNaN(bilanganB)) {
  console.log(
    "Error: Input yang Anda masukkan bukan merupakan angka yang valid!",
  );
} else {
  // 5. Menjalankan fungsi dengan nilai yang telah dikonversi
  console.log(
    `--- Hasil Operasi untuk a = ${bilanganA} dan b = ${bilanganB} ---`,
  );
  operasiDasar(bilanganA, bilanganB);
}

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// --- FUNGSI VALIDASI ---
function validasiInput(nilai, errorElementId) {
  const errorEl = document.getElementById(errorElementId);
  if (nilai < 0 || nilai > 100 || isNaN(nilai)) {
    errorEl.style.display = "inline";
    return false;
  }
  errorEl.style.display = "none";
  return true;
}

// --- FUNGSI TAMPILAN (UI LAYER) ---
function prosesDanTampilkan() {
  // Ambil nilai dari form
  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  // Validasi input rentang 0-100
  const vTugas = validasiInput(tugas, "errorTugas");
  const vUts = validasiInput(uts, "errorUts");
  const vUas = validasiInput(uas, "errorUas");

  // Jika ada input yang tidak valid, sembunyikan kotak hasil dan hentikan proses
  if (!vTugas || !vUts || !vUas) {
    document.getElementById("resultBox").style.display = "none";
    return;
  }

  // Proses perhitungan menggunakan fungsi terpisah
  const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(nilaiAkhir);
  const status = tentukanStatus(nilaiAkhir);

  // Tampilkan hasil ke halaman HTML
  document.getElementById("resNilaiAkhir").innerText = nilaiAkhir.toFixed(2);
  document.getElementById("resPredikat").innerText = predikat;
  document.getElementById("resStatus").innerText = status;

  // Munculkan kotak hasil
  document.getElementById("resultBox").style.display = "block";
}

// membuat perulangan
const angka = 7;

console.log(`--- TABEL PERKALIAN ${angka} ---`);

for (let i = 1; i <= 10; i++) {
  let hasil = i * angka;

  console.log(`${i} x ${angka} = ${hasil}`);
}

// 1. Membuat fungsi cekGenap
function cekGenap(angka) {
  // Jika angka dibagi 2 sisa baginya adalah 0, maka nilainya true (genap)
  return angka % 2 === 0;
}

// 2. Contoh Pengujian Fungsi
console.log(cekGenap(4)); // Hasil: true  (karena 4 adalah genap)
console.log(cekGenap(7)); // Hasil: false (karena 7 adalah ganjil)
console.log(cekGenap(10)); // Hasil: true  (karena 10 adalah genap)
console.log(cekGenap(0)); // Hasil: true  (karena 0 dianggap genap)

// --- FUNGSI VALIDASI KOSONG (PURE JAVASCRIPT) ---
function validasiFormKosong(inputData) {
  // Memeriksa apakah input data bertipe string, null, atau undefined
  if (inputData === null || inputData === undefined) {
    return { valid: false, pesan: "Kolom tidak boleh kosong!" };
  }

  // Mengubah ke string dan menghapus spasi di awal/akhir dengan .trim()
  const teksBersih = String(inputData).trim();

  if (teksBersih === "") {
    return { valid: false, pesan: "Kolom tidak boleh kosong!" };
  }

  // Jika lolos validasi kosong
  return { valid: true, pesan: "Input valid." };
}

// --- CONTOH SKENARIO PENGUJIAN ---

// Skenario 1: Input kosong (string kosong)
const inputUser1 = "";
console.log("Skenario 1:", validasiFormKosong(inputUser1));
// Hasil: { valid: false, pesan: 'Kolom tidak boleh kosong!' }

// Skenario 2: Input hanya berisi spasi
const inputUser2 = "    ";
console.log("Skenario 2:", validasiFormKosong(inputUser2));
// Hasil: { valid: false, pesan: 'Kolom tidak boleh kosong!' }

// Skenario 3: Input berisi data valid
const inputUser3 = "85";
console.log("Skenario 3:", validasiFormKosong(inputUser3));
// Hasil: { valid: true, pesan: 'Input valid.' }

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });
  // Menampilkan total dengan format ribuan Indonesia
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function toggleElemen() {
  // 1. Ambil elemen target dan elemen tombol
  const kotak = document.getElementById("kotakKonten");
  const tombol = document.getElementById("btnToggle");

  // 2. Cek kondisi gaya display saat ini
  if (kotak.style.display === "none") {
    // Jika sedang sembunyi, tampilkan kembali
    kotak.style.display = "block";
    tombol.textContent = "Sembunyikan Kotak";
  } else {
    // Jika sedang tampil, sembunyikan elemen
    kotak.style.display = "none";
    tombol.textContent = "Tampilkan Kotak";
  }
}
