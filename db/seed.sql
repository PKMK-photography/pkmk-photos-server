create table if not exists pkmk_admin (
    admin_id serial primary key,
    email varchar(50),
    password varchar(250)
);