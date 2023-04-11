import PokemonFavourite from "../pokemonFavourite";

export interface PokemonFavouritesTimeRepositoryInterface {
    save(pokemonFavourite: PokemonFavourite): void;
    findPokemonFavouritesById(pokemonId: number): PokemonFavourite | undefined;
    getPokemonFavoutiteTimesById(pokemonId: number): number;
}