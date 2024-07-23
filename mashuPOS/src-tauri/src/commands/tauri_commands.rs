use tauri::command;

use crate::config::database::establecer_conexion;
use crate::models::pokemon::Pokemon;
use crate::services::pokemon_service::PokemonService;

#[command]
pub fn get_all_pokemons() -> Result<Vec<Pokemon>, String> {
    let conexion = establecer_conexion();
    let mut pokemon_service = PokemonService::new(conexion);
    pokemon_service
        .get_all_pokemons()
        .map_err(|err| err.to_string())
}

#[command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
