use crate::config::database::MysqlConnection;
use crate::models::pokemon::Pokemon;
use crate::schema::pokemon::dsl::*;
use diesel::prelude::*;

pub struct PokemonRepository {
    conexion: MysqlConnection,
}

impl PokemonRepository {
    pub fn new(conexion: MysqlConnection) -> Self {
        PokemonRepository { conexion }
    }

    pub fn get_all_pokemons(&mut self) -> Result<Vec<Pokemon>, diesel::result::Error> {
        pokemon.load::<Pokemon>(&mut self.conexion)
    }
}
