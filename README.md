# Meja Kerja

Dashboard pribadi untuk mengelola pekerjaan kreatif: board kanban, deadline, checklist, revisi, dan rekap keuangan.
Satu file HTML + vanilla JS. Semua data tersimpan di cloud dan sinkron antar perangkat.

## Setup

1. Jalankan `schema.sql` di SQL Editor layanan database-mu untuk membuat tabel `projects` beserta RLS.
2. Buat satu user di Authentication > Users, lalu matikan pendaftaran user baru.
3. Deploy ke Vercel, lalu di Project Settings > Environment Variables tambahkan `CLOUD_URL` dan `CLOUD_KEY` (anon key). Deploy ulang setelah menambahkannya.
4. Kredensial dibaca oleh `api/config.js`, jadi tidak ada di `index.html` maupun di repo.

## Catatan

- Anon key tetap bisa dilihat lewat tab Network di browser (semua aplikasi web yang terhubung langsung ke database begitu). Yang menjaga data adalah RLS dan pendaftaran user yang dimatikan.
- Anon key memang dirancang untuk publik. Keamanan data dijaga RLS pada tabel `projects`. Jangan pernah memasukkan `service_role` key.
- Drag & drop tidak berfungsi di layar sentuh. Ubah tahap lewat dropdown di detail proyek.
