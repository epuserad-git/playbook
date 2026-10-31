-- Jalankan di Supabase: SQL Editor > New query > Run

create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title       text not null,
  client      text,
  status      text not null default 'ide'
              check (status in ('ide','brief','kerja','revisi','approval','selesai')),
  deadline    date,
  value       bigint not null default 0,
  paid        bigint not null default 0,
  brief       text,
  links       text,
  tasks       jsonb not null default '[]',      -- [{id, title, done}]
  revisions   jsonb not null default '[]',      -- [{round, note, date}]
  created_at  timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "owner only" on public.projects
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Setelah itu: Authentication > Users > Add user (email + password milikmu),
-- lalu matikan "Allow new users to sign up" di Authentication > Providers > Email.
