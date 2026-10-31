# Meja Kerja

Dashboard pribadi untuk mengelola pekerjaan kreatif: board kanban, deadline, checklist, revisi, dan rekap keuangan.
Satu file HTML + vanilla JS. Semua data tersimpan di cloud dan sinkron antar perangkat.

## Setup

1. Jalankan `schema.sql` di SQL Editor layanan database-mu untuk membuat tabel `projects` beserta RLS.
2. Buat satu user di Authentication > Users, lalu matikan pendaftaran user baru.
3. Isi `CLOUD_URL` dan `CLOUD_KEY` (anon key) di bagian atas script `index.html`.
4. Deploy sebagai situs statis (Vercel, GitHub Pages, dan sejenisnya).

## Catatan

- Anon key memang dirancang untuk publik. Keamanan data dijaga RLS pada tabel `projects`. Jangan pernah memasukkan `service_role` key.
- Drag & drop tidak berfungsi di layar sentuh. Ubah tahap lewat dropdown di detail proyek.
