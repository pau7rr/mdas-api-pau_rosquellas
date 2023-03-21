import RestPokemonRepository from "../../../../../src/poke-dex/pokemons/infrastructure/repositories/rest-pokemon.repository";
import PokemonAggregate from "../../../../../src/poke-dex/pokemons/domain/pokemon.aggregate";
import { PokemonId, PokemonName } from "../../../../../src/poke-dex/pokemons/domain/value-objects";
import PokemonNameValueObject
  from "../../../../../src/poke-dex/pokemons/domain/value-objects/pokemon-name.value-object";

describe("RestPokemonRepository", () => {
  const pokemonRepository = new RestPokemonRepository();

  describe("getPokemonByName", () => {

    it("should return a PokemonAggregate", async () => {
      // Given
      const pokemonName = new PokemonName("pikachu");

      // When
      const pokemon = await pokemonRepository.getPokemonByName(pokemonName);

      // Then
      expect(pokemon).toBeInstanceOf(PokemonAggregate);
      expect(pokemon.getName()).toEqual(pokemonName);
    });

    it("should throw an error when the pokemon is not found", async () => {
      // Given
      const pokemonName = new PokemonName("pikachuu");

      // When
      const pokemon = pokemonRepository.getPokemonByName(pokemonName);

      // Then
      await expect(pokemon).rejects.toThrowError();
    });

    // it("should throw an error when the connection is not available", async () => {
    //   // Given
    //   const pokemonName = "pikachu";
    //   jest.spyOn(global, "fetch").mockImplementation(() => {
    //     throw new Error("Network Error");
    //   });

    //   // When
    //   const pokemon = pokemonRepository.getPokemonByName(pokemonName);

    //   // Then
    //   await expect(pokemon).rejects.toThrowError();
    // });

    afterEach(() => {
      jest.restoreAllMocks();
    });

  });
});
