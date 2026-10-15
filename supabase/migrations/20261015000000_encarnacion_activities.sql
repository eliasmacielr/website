-- Activities for the /encarnacion-nov-2026 calendar.
-- Times are local to Encarnación (UTC-3), stored as minutes since midnight.
create table if not exists public.encarnacion_activities (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 200),
  date date not null check (date between '2026-11-14' and '2026-11-29'),
  start_min smallint not null check (start_min between 0 and 1439),
  end_min smallint not null check (end_min between 1 and 1440),
  all_day boolean not null default false,
  location text not null default '' check (char_length(location) <= 200),
  notes text not null default '' check (char_length(notes) <= 2000),
  color text not null default 'blue',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (end_min > start_min)
);

-- No policies: only the service role, used server-side by the Next.js app,
-- can read or write this table.
alter table public.encarnacion_activities enable row level security;
