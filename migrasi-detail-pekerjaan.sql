-- Jalankan sekali di SQL Editor (database yang sudah ada)
alter table public.projects add column if not exists items jsonb not null default '[]';      -- [{id, name, mode, w, h, qty, price}]
alter table public.projects add column if not exists design_fee bigint not null default 0;   -- biaya desain
