// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod config;
mod models;
mod repositories;
mod schema;
mod services;

use commands::tauri_commands::get_all_pokemons;
use commands::tauri_commands::greet;
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_all_pokemons])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
