# Rancangan Database & Alur Sistem — Web Showcase Produk Prodi

Stack: Laravel (Blade)

## 1. Ringkasan Role

| Role | Login? | Deskripsi |
|---|---|---|
| **Guest / Publik** | Tidak | Pengunjung umum, hanya bisa melihat & mencari produk yang berstatus `published` |
| **Dosen** | Ya | Bisa input, edit, hapus produk yang dia jadi PIC/pembimbing |
| **Admin** | Ya | Kelola semua produk, kategori, mata kuliah, dan akun dosen |

> Catatan: karena guest tidak login, sebenarnya tabel `users` hanya menyimpan akun **admin** dan **dosen**. Data mahasiswa disimpan terpisah (bukan akun login) karena mereka hanya "dicatat", bukan mengakses sistem.

---

## 2. Skema Tabel

### `users`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint, PK | |
| name | varchar | |
| email | varchar, unique | |
| password | varchar | |
| role | enum('admin','dosen') | |
| nip | varchar, nullable | khusus dosen |
| avatar | varchar, nullable | |
| created_at / updated_at | timestamp | |

### `categories`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint, PK | |
| name | varchar | mis. "Web Application", "IoT & Hardware" |
| slug | varchar, unique | |
| icon | varchar, nullable | untuk badge di UI |
| created_at / updated_at | timestamp | |

### `courses` (mata kuliah)
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint, PK | |
| name | varchar | mis. "Project Based Learning", "Proyek Akhir", "Deep Learning" |
| code | varchar, nullable | mis. "PBL", "PA", "TIC" (sesuai data excel kamu) |
| created_at / updated_at | timestamp | |

### `products`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint, PK | |
| title | varchar | |
| slug | varchar, unique | untuk URL detail produk |
| description | text | |
| category_id | FK → categories.id | |
| course_id | FK → courses.id, nullable | |
| academic_year | varchar | mis. "2025/2026" |
| semester | enum('ganjil','genap') | |
| poster_path | varchar, nullable | path file poster |
| demo_link | varchar, nullable | link demo produk |
| video_link | varchar, nullable | link video demo |
| github_link | varchar, nullable | opsional, kalau mau tampilkan repo |
| status | enum('draft','published','archived') | default `draft` |
| views_count | integer | default 0, opsional untuk statistik populer |
| created_by | FK → users.id | dosen/admin yang input |
| published_at | timestamp, nullable | |
| created_at / updated_at | timestamp | |

### `product_dosen` (pivot, many-to-many)
| Kolom | Tipe |
|---|---|
| id | bigint, PK |
| product_id | FK → products.id |
| user_id | FK → users.id (role dosen) |

> Dipakai kalau satu produk punya lebih dari satu dosen pembimbing.

### `product_students`
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint, PK | |
| product_id | FK → products.id | |
| name | varchar | nama mahasiswa |
| nim | varchar, nullable | |
| role | varchar, nullable | mis. "Manager Project", "Development Team" |

> Bukan tabel `users` karena mahasiswa tidak butuh login ke sistem ini — cukup dicatat sebagai data anggota tim. Kolom `role` opsional, berguna kalau mau bedakan peran seperti di contoh UI (Manager Project vs Development Team).

### `tags` 
| Kolom | Tipe |
|---|---|
| id | bigint, PK |
| name | varchar |
| slug | varchar, unique |

### `product_tag` 
| Kolom | Tipe |
|---|---|
| product_id | FK → products.id |
| tag_id | FK → tags.id |

> Berguna kalau nanti mau tampilkan teknologi yang dipakai tiap produk (mis. "Laravel", "React", "Flutter") sebagai filter tambahan.

---

## 3. Relasi (ERD ringkas)

```
users (dosen) ──┐
                 ├──< product_dosen >── products
categories ──────────────────────────┤
courses ──────────────────────────────┤
                                       ├──< product_students
                                       └──< product_tag >── tags
```

- `products.category_id` → `categories.id` (many-to-one)
- `products.course_id` → `courses.id` (many-to-one)
- `products.created_by` → `users.id` (many-to-one)
- `products` ↔ `users` (dosen) → many-to-many lewat `product_dosen`
- `products` → `product_students` → one-to-many
- `products` ↔ `tags` → many-to-many lewat `product_tag`

---

## 4. Alur Sistem

### A. Guest / Pengunjung (tanpa login)
1. Buka landing page → melihat daftar produk dengan `status = published`.
2. Bisa cari (search judul/deskripsi) dan filter berdasarkan kategori, mata kuliah, tahun ajaran/semester — mirip tampilan TRPL Polibatam yang kamu contohkan.
3. Klik salah satu produk → halaman detail: poster, deskripsi, kategori, PIC dosen & mahasiswa, link demo, link video.
4. Klik link demo/video → buka tab baru (tidak perlu login).

### B. Dosen (login)
1. Login → dashboard dosen: daftar produk yang dia jadi PIC/pembimbing.
2. **Tambah produk baru**: isi judul, deskripsi, pilih kategori & mata kuliah, isi tahun ajaran/semester, upload poster, isi link demo & video, tambah anggota mahasiswa (nama + NIM, bisa lebih dari satu), tambah dosen pembimbing lain kalau ada.
3. Simpan sebagai `draft` (belum tampil publik) atau langsung `published`.
4. Bisa edit/hapus produk yang dia buat sendiri saja — tidak bisa mengubah produk dosen lain.

### C. Admin
1. Login → dashboard admin: overview semua produk dari semua dosen, statistik jumlah produk per kategori/tahun ajaran.
2. Kelola kategori (CRUD).
3. Kelola mata kuliah (CRUD).
4. Kelola akun dosen (buat akun baru, reset password, nonaktifkan).
5. Kelola semua produk: edit, hapus, atau ubah status produk siapa pun (mis. `unpublish` produk yang kurang layak tampil).

---

## 5. Catatan Tambahan

- **Index**: tambahkan index pada `products.slug`, `products.category_id`, `products.status`, dan `products.academic_year` karena kolom ini sering dipakai untuk filter/pencarian.
- **Penyimpanan poster**: pakai Laravel Storage (disk `public`) untuk awal; kalau jumlah produk & traffic besar, pertimbangkan pindah ke S3/cloud storage.
- **Slug**: generate otomatis dari `title` (pakai package seperti `spatie/laravel-sluggable`) supaya URL detail produk rapi, mis. `/produk/nutrichain-mbg`.
- **Middleware & routing**: gunakan middleware role-based (`admin`, `dosen`) untuk membatasi akses route dashboard, dan pastikan route publik (landing + detail produk) tidak butuh auth sama sekali. Halaman bisa dirender langsung pakai Blade view tanpa perlu API/JSON terpisah.

---

## 6. Rencana Selanjutnya (Belum Diimplementasikan)

- **Alur approval**: dosen submit produk sebagai `draft`, admin yang mengubah ke `published` sebelum tampil publik. Struktur `status` pada tabel `products` sudah mendukung ini tanpa perlu ubah skema, tinggal diaktifkan di logika aplikasi kapan pun dibutuhkan.
