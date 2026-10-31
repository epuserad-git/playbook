# Meja Kerja

Dashboard pribadi untuk mengelola pekerjaan kreatif: board kanban, deadline, checklist, revisi, dan ringkasan pembayaran.
Vanilla JS satu file + Supabase.

## Menjalankan

1. Buka `index.html` di browser. Tanpa konfigurasi, aplikasi berjalan dalam **mode demo** (data di localStorage).
2. Untuk memakai Supabase:
   - Jalankan `schema.sql` di Supabase SQL Editor.
   - Buat satu user di Authentication > Users, lalu matikan sign-up.
   - Isi `SUPABASE_URL` dan `SUPABASE_KEY` (anon key) di bagian atas script `index.html`.

## Catatan

- Anon key memang dirancang untuk publik. Keamanan data dijaga oleh RLS pada tabel `projects`, jadi pastikan RLS aktif (sudah ada di `schema.sql`). Jangan pernah memasukkan `service_role` key.
- Drag & drop tidak berfungsi di layar sentuh. Ubah tahap lewat dropdown di detail proyek.

## Rencana

- Kalender deadline
- Aset dan moodboard
- Riwayat pembayaran
