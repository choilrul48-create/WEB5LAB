# Laporan Praktikum Pemrograman Web

**Universitas Pelita Bangsa**  
**Program Studi Teknik Informatika 2026**

| Informasi Praktikum | Detail |
| :--- | :--- |
| **Mata Kuliah** | Pemrograman Web |
| **Topik Modul** | Menambahkan JavaScript 1 |
| **Dosen Pengampu** | Agung Nugroho, S.Kom., M.Kom |
| **Disusun Oleh** | Choirul Majid |

---

## 📸 Tangkapan Layar & Media Dokumentasi

> **Catatan:** Pastikan Anda menyimpang file gambar screenshot hasil praktikum ke dalam folder `images/` atau `assets/` pada repositori GitHub Anda agar gambar dapat ditampilkan secara presisi.

| Halaman | Deskripsi | File Gambar |
| :--- | :--- | :--- |
| **Logo Universitas** | Logo Universitas Pelita Bangsa | `![Logo UPB](images/logo-pelita-bangsa.png)` |
| **Latihan 1-3** | Pengenalan JS, Output Dialog & Operator | `![Tampilan 1-3](images/tampilan-modul-1-3.png)` |
| **Latihan 4-7** | Function, Logic, Loop & DOM | `![Tampilan 4-7](images/tampilan-modul-4-7.png)` |
| **Praktikum 2** | Alert, Prompt, Aritmetika & Selection | `![Tampilan Praktikum 2](images/tampilan-praktikum-2.png)` |
| **Mini Project** | Form Kalkulator Nilai Mahasiswa | `![Kalkulator Nilai](images/kalkulator-nilai.png)` |
| **Eksperimen** | Tabel Perkalian, Form & Toggle HTML | `![Eksperimen Mandiri](images/eksperimen-mandiri.png)` |

---

## 📚 Materi Modul Praktikum

### 1. Menambahkan JavaScript ke HTML
Menghubungkan berkas JavaScript eksternal `script.js` ke file `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praktikum JavaScript</title>
</head>
<body>
    <h1>Pengenalan JavaScript</h1>
    <p id="pesan">Konten awal.</p>

    <script src="script.js"></script>
</body>
</html>
```

### 2. Output dan Dialog Box
Penggunaan `console.log()`, `alert()`, `prompt()`, dan manipulasi konten DOM.

```javascript
console.log("Pesan di Console");
alert("Selamat belajar JavaScript!");

const nama = prompt("Siapa nama Anda?", "Nama mahasiswa");
console.log("Nama:", nama);

const elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Halo, JavaScript!";
```

### 3. Variabel, Tipe Data, dan Operator
Variabel `const` dan `let`, tipe data dasar (String, Number, Boolean), serta operator aritmetika/perbandingan.

```javascript
const nama = "Rani";
let umur = 20;
const mahasiswaAktif = true;

const a = 12;
const b = 5;

console.log(nama, umur, mahasiswaAktif);
console.log("Penjumlahan:", a + b);
console.log("Perkalian:", a * b);
console.log("Sisa bagi:", a % b);
console.log("Apakah a lebih besar?", a > b);
```

### 4. Function
Membuat fungsi sederhana untuk menghitung nilai kembalian.

```javascript
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

console.log("Luas:", hitungLuas(8, 4));
```

### 5. Percabangan (`if-else` & `switch`)
Logika kondisi keputusan pada JavaScript.

```javascript
// Struktur IF-ELSE
const nilai = 76;
if (nilai >= 60) {
    console.log("Lulus");
} else {
    console.log("Belum lulus");
}

// Struktur SWITCH-CASE
const pilihan = "2";
switch (pilihan) {
    case "1":
        console.log("Pilihan satu");
        break;
    case "2":
        console.log("Pilihan dua");
        break;
    default:
        console.log("Pilihan tidak tersedia");
}
```

### 6. Perulangan (`for` & `while`)

```javascript
// Perulangan FOR
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

// Perulangan WHILE
let angka = 3;
while (angka > 0) {
    console.log(angka);
    angka--;
}
```

### 7. Manipulasi Style & Elemen DOM

```javascript
function ubahTampilan() {
    document.body.style.backgroundColor = "lightyellow";
    document.getElementById("pesan").style.color = "blue";
    document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}
```

---

## 🧪 Praktikum 2 & Latihan Kasus

### Latihan 1-2: Input User & Validasi String
```javascript
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}
```

### Latihan 3: Operasi Aritmetika Lengkap
```javascript
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b === 0 ? "Tidak dapat dibagi nol" : a / b);
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);
```

### Latihan 4-5: Seleksi Kondisi Validasi Nilai & Pilihan Angka
```javascript
// Validasi Input Nilai (0-100)
const inputNilai = prompt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}
```

### Latihan 6-8: Form Genap/Ganjil, Ubah Warna & Checklist Menu
```javascript
// Menghitung Total Harga Checklist Menu Makanan
function hitungTotal() {
    const daftarMenu = document.querySelectorAll(".menu");
    let total = 0;
    
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
```

---

## 🚀 Mini Project & Eksperimen Mandiri

### 1. Form Kalkulator Nilai Akhir Mahasiswa
Form interaktif untuk menghitung akumulasi Nilai Akhir, Predikat, dan Status Kelulusan.

```html
<form id="formNilai">
    <div>
        <label for="tugas">Nilai Tugas (0-100):</label><br />
        <input type="number" id="tugas" min="0" max="100" required />
        <span id="errorTugas" style="color: red; display: none;">Nilai harus antara 0-100!</span>
    </div>
    <br />
    <div>
        <label for="uts">Nilai UTS (0-100):</label><br />
        <input type="number" id="uts" min="0" max="100" required />
        <span id="errorUts" style="color: red; display: none;">Nilai harus antara 0-100!</span>
    </div>
    <br />
    <div>
        <label for="uas">Nilai UAS (0-100):</label><br />
        <input type="number" id="uas" min="0" max="100" required />
        <span id="errorUas" style="color: red; display: none;">Nilai harus antara 0-100!</span>
    </div>
    <br />
    <button type="button" onclick="prosesDanTampilkan()">Hitung Nilai</button>
</form>

<div id="resultBox" style="display: none;">
    <h3>Hasil Kelulusan:</h3>
    <p>Nilai Akhir: <strong id="resNilaiAkhir"></strong></p>
    <p>Predikat: <strong id="resPredikat"></strong></p>
    <p>Status: <strong id="resStatus"></strong></p>
</div>
```

### 2. Program Tabel Perkalian 7
```javascript
const angka = 7;
console.log(`--- TABEL PERKALIAN ${angka} ---`);
for (let i = 1; i <= 10; i++) {
    let hasil = i * angka;
    console.log(`${i} x ${angka} = ${hasil}`);
}
```

### 3. Fungsi Cek Bilangan Genap (`cekGenap`)
```javascript
function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log(cekGenap(4));  // true
console.log(cekGenap(7));  // false
console.log(cekGenap(18)); // true
console.log(cekGenap(0));  // true
```

### 4. Toggle Elemen (Sembunyikan / Tampilkan HTML)
```html
<h2>Latihan Toggle Elemen HTML</h2>
<button id="btnToggle" onclick="toggleElemen()">Sembunyikan Kotak</button>
<br /><br />
<div id="kotakKonten" style="padding: 20px; background-color: lightblue; width: 200px;">
    <p>Ini adalah teks di dalam kotak konten yang bisa disembunyikan.</p>
</div>

<script>
function toggleElemen() {
    const kotak = document.getElementById("kotakKonten");
    const btn = document.getElementById("btnToggle");
    
    if (kotak.style.display === "none") {
        kotak.style.display = "block";
        btn.textContent = "Sembunyikan Kotak";
    } else {
        kotak.style.display = "none";
        btn.textContent = "Tampilkan Kotak";
    }
}
</script>
```

---

## 📂 Struktur Repositori

```text
.
├── images/
│   ├── logo-pelita-bangsa.png
│   ├── tampilan-modul-1-3.png
│   ├── tampilan-modul-4-7.png
│   ├── tampilan-praktikum-2.png
│   ├── kalkulator-nilai.png
│   └── eksperimen-mandiri.png
├── index.html
├── script.js
└── README.md
```