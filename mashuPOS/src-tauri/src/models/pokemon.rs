use diesel::Queryable;
use serde::Serialize;

#[derive(Debug, Queryable, Serialize)]
pub struct Pokemon {
    pub id: i32,
    pub numero_pokedex: i32,
    pub nombre: String,
    pub img_url: String,
}
