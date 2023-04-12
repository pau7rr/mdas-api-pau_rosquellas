import PokemonFavourite from "../../../../../src/poke-dex/pokemons/domain/pokemonFavourite";
import AddPokemonFavouritedTimesUseCase from "../../../../../src/poke-dex/pokemons/application/use-cases/add-pokemonFavouritedTimes.use-case";

const pokemonFavourite = new PokemonFavourite(1)

const mockPokemonFavouritedTimesRepository = {
    save: jest.fn().mockReturnValue(pokemonFavourite), //
    getPokemonFavoutiteTimesById: jest.fn().mockReturnValue(5), //
    findPokemonFavouritesById: jest.fn().mockReturnValue(pokemonFavourite) //
}

describe('Add pokemon favourited times use case tests', () => {
  it('should be defined', () => {
    expect(AddPokemonFavouritedTimesUseCase).toBeDefined();
  });

  it('should be executed', async () => {
    const useCase = new AddPokemonFavouritedTimesUseCase(mockPokemonFavouritedTimesRepository);
    expect(useCase.execute(1));
    expect(mockPokemonFavouritedTimesRepository.save).toBeCalledTimes(1);  
});
});