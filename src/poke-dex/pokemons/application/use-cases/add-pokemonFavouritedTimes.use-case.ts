import { PokemonFavouritesTimeRepositoryInterface } from "../../domain/interfaces/pokemon-favourites-time-repository.interface";
import PokemonFavourite from "../../domain/pokemonFavourite";

class AddPokemonFavouritedTimesUseCase {
  private repository: PokemonFavouritesTimeRepositoryInterface;

  constructor(repository: PokemonFavouritesTimeRepositoryInterface) {
    this.repository = repository;
  }

  execute(pokemonId: number): void {
    this.repository.save(new PokemonFavourite(pokemonId));
  }
}

export default AddPokemonFavouritedTimesUseCase;
