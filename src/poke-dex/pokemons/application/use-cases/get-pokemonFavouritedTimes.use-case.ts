import { PokemonFavouritesTimeRepositoryInterface } from "../../domain/interfaces/pokemon-favourites-time-repository.interface";

class GetPokemonFavouritedTimesUseCase {
     private repository: PokemonFavouritesTimeRepositoryInterface;

     constructor(repository: PokemonFavouritesTimeRepositoryInterface) {
        this.repository = repository;
    }

    execute(pokemonId: number) {
        return this.repository.getPokemonFavoutiteTimesById(pokemonId);
    }
}

export default GetPokemonFavouritedTimesUseCase;