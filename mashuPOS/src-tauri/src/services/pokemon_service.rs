use crate::config::database::MysqlConnection;
use crate::models::pokemon::Pokemon;
use crate::repositories::pokemon_repository::PokemonRepository;

pub struct PokemonService {
    repo: PokemonRepository,
}

impl PokemonService {
    pub fn new(conexion: MysqlConnection) -> Self {
        let repo = PokemonRepository::new(conexion);
        PokemonService { repo }
    }

    pub fn get_all_pokemons(&mut self) -> Result<Vec<Pokemon>, diesel::result::Error> {
        self.repo.get_all_pokemons()
    }

    // Otros métodos de servicio según sea necesario
}
