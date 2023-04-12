import GetPokemonFavouritedTimesUseCase from "../../../../../src/poke-dex/pokemons/application/use-cases/get-pokemonFavouritedTimes.use-case";
import PokemonFavourite from "../../../../../src/poke-dex/pokemons/domain/pokemonFavourite";

const pokemonFavourite = new PokemonFavourite(1)

const mockPokemonFavouritedTimesRepository = {
    save: jest.fn().mockReturnValue(pokemonFavourite), //
    getPokemonFavoutiteTimesById: jest.fn().mockReturnValue(5), //
    findPokemonFavouritesById: jest.fn().mockReturnValue(pokemonFavourite) //
}

describe('Get pokemon favourited times use case tests', () => {
  it('should be defined', () => {
    expect(GetPokemonFavouritedTimesUseCase).toBeDefined();
  });

  it('should be executed', async () => {
    const useCase = new GetPokemonFavouritedTimesUseCase(mockPokemonFavouritedTimesRepository);
    expect(useCase.execute(1)).toBe(5);
    expect(mockPokemonFavouritedTimesRepository.getPokemonFavoutiteTimesById).toBeCalledTimes(1);  
});
});