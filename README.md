# Responsi_Modul1_Prak_PPB

Nama      : Damai Raya Fakhruddin<br>
NIM       : 21120123130096<br>
Kelompok  : 37<br>

## Deskripsi Umum
Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu.<br>

Cuci Sepatu API dibuat untuk membantu pengelolaan data layanan cuci sepatu secara digital. Melalui API ini pengguna dapat melakukan beberapa hal, diantaranya yaitu:<br>
- Menambahkan data sepatu pelanggan yang masuk
- Melihat daftar sepatu yang sedang diproses
- Memperbarui status cucian
- Menghapus data sepatu yang sudah tidak diperlukan

## Tujuan
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam bentuk REST API untuk mengelola data layanan cuci sepatu secara efisien.
2. Meningkatkan pemahaman penggunaan Express.js sebagai framework backend modern untuk membangun API yang ringan dan mudah dikembangkan.
3. Membangun sistem pencatatan operasional cuci sepatu yang relevan dengan kebutuhan dunia bisnis, serta dapat menjadi fondasi untuk pengembangan aplikasi layanan pelanggan di masa depan.

## Fitur Utama API
| Metode | Endpoint | Deskripsi |
|----------|----------|----------|
| POST   | /items   | Menambahkan data pesanan   |
| GET   | /items   | Menampilkan semua data pesanan   |
| GET   | /items?status={nama_status}   | Menampilkan data pesanan berdasarkan status   |
| GET   | /items/{id}   | Menampilkan data pesanan berdasarkan ID pesanan   |
| PUT   | /items/{id}   | Mengubah data pesanan berdasarkan ID pesanan   |
| DELETE   | /items/{id}   | Menghapus data pesanan berdasarkan ID pesanan   |

## Struktur Data
Contoh struktur data sepatu yang disimpan:
```json
{
    "id": 1,
    "nama_pelanggan": "Rudi",
    "jenis_sepatu": "Sneakers",
    "status": "Proses",
    "tanggal_masuk": "2025-10-19"
}
```
Keterangan:<br>
| Kolom           | Keterangan                                           |
|-----------------|------------------------------------------------------|
| `id`            | ID unik setiap sepatu |
| `nama_pelanggan`| Nama pelanggan yang mencuci sepatu |
| `jenis_sepatu`  | Jenis sepatu |
| `status`        | Status cucian: `Proses`, `Selesai`, atau `Batal` |
| `tanggal_masuk` | Tanggal sepatu diterima (default: tanggal hari ini) |

## Contoh Request dan Response
`POST/items`<br>
Request:
```json
{
  "nama_pelanggan": "Damai Raya",
  "jenis_sepatu": "Sneakers",
  "status": "Proses",
  "tanggal_masuk": "2025-10-19"
}
```
Response:
```json
{
  "id": 1,
  "nama_pelanggan": "Damai Raya",
  "jenis_sepatu": "Sneakers",
  "status": "Proses",
  "tanggal_masuk": "2025-10-19"
}
```
`GET/items`<br>
Response:
```json
[
  {
    "id": 1,
    "nama_pelanggan": "Damai Raya",
    "jenis_sepatu": "Sneakers",
    "status": "Proses",
    "tanggal_masuk": "2025-10-19"
  }
]
```
`GET/items?status=Selesai`<br>
Response:
```json
[
  {
    "id": 2,
    "nama_pelanggan": "Boboiboy",
    "jenis_sepatu": "Pantofel",
    "status": "Selesai",
    "tanggal_masuk": "2025-10-17"
  }
]
```
`PUT/items/1`<br>
Request:
```json
{
  "nama_pelanggan": "Damai Raya",
  "jenis_sepatu": "Converse High",
  "status": "Selesai",
  "tanggal_masuk": "2025-10-18"
}
```
Response:
```json
{
  "id": 1,
  "nama_pelanggan": "Damai Raya",
  "jenis_sepatu": "Converse High",
  "status": "Selesai",
  "tanggal_masuk": "2025-10-18"
}
```
`DELETE/items/1`<br>
Response:
```json
{ "message": "Sepatu dengan ID 1 berhasil dihapus." }
```

## Langkah Instalasi dan Menjalankan API
1. Clone repository (git clone https://github.com/Damairf/Responsi_Modul1_Prak_PPB)
2. Install dependensi (npm install)
3. Buat file .env dan isi dengan kode dibawah ini:
```js
SUPABASE_URL=(Url Supabase)
SUPABASE_KEY=(Key Supabase)
PORT=3000
```
4. Jalankan server (npm run dev)
5. Server akan berjalan di http://localhost:3000

## Link Deploy
