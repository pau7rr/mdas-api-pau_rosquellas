import { PokemonFavouritesTimeRepositoryInterface } from "../../domain/interfaces/pokemon-favourites-time-repository.interface";
import PokemonFavourite from "../../domain/pokemonFavourite";

class InMemoryPokemonFavouritesRepository implements PokemonFavouritesTimeRepositoryInterface {
    private pokemonFavourites: PokemonFavourite[] = []
    public static instance: InMemoryPokemonFavouritesRepository;

    save(pokemonFavourite: PokemonFavourite): void {
        if (this.pokemonFavourites.length === 0) {
            this.pokemonFavourites.push(pokemonFavourite);
        }

        const item = this.pokemonFavourites.find(function(e){
            return e.getId() === pokemonFavourite.getId();
        });
        
        if (item) {
            item.addFavouritedTimes();
            return;
        }

        this.pokemonFavourites.push(pokemonFavourite);
    }

    findPokemonFavouritesById(pokemonId: number): PokemonFavourite | undefined {
        return this.pokemonFavourites.find((pokemonFavourite) => pokemonFavourite.getId() === pokemonId);
    }

    getPokemonFavoutiteTimesById(pokemonId: number): number {
        const pokemonFavourite = this.findPokemonFavouritesById(pokemonId);

        if (!pokemonFavourite) {
            return 0;
        }

        return pokemonFavourite.getTimesFavourited();
    }

    public static getInstance(): InMemoryPokemonFavouritesRepository {
        if (!InMemoryPokemonFavouritesRepository.instance) {
            InMemoryPokemonFavouritesRepository.instance = new InMemoryPokemonFavouritesRepository();
        }

        return InMemoryPokemonFavouritesRepository.instance;
    }

}

export default InMemoryPokemonFavouritesRepository;