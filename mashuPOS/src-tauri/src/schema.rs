use diesel::table;

table! {
    pokemon (id) {
        id -> Integer,
        numero_pokedex -> Integer,
        nombre -> Varchar,
        img_url -> Varchar,
    }
}
