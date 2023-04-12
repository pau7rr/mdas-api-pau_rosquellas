import PokemonFavourite from "../../../../src/poke-dex/pokemons/domain/pokemonFavourite";

  it("should be defined", () => {
    expect(PokemonFavourite).toBeDefined();
  });

  it("should be able to create a new instance", () => {
    // Given
    const id = 1

    // When
    const pokemonFavourite = new PokemonFavourite(id);

    // Then
    expect(pokemonFavourite).toBeDefined();

});
