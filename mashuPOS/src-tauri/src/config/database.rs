// src/config/database.rs

use diesel::prelude::*;
use dotenv::dotenv;
use std::env;

pub type MysqlConnection = diesel::MysqlConnection;

pub fn obtener_url_base_datos() -> String {
    dotenv().ok();
    env::var("DATABASE_URL").expect("DATABASE_URL no está configurada en .env")
}

pub fn establecer_conexion() -> MysqlConnection {
    let database_url = obtener_url_base_datos();

    MysqlConnection::establish(&database_url)
        .expect(&format!("Error conectando a {}", database_url))
}
