class PokemonFavourite {
    private pokemonId: number;
    private timesFavourited: number;

    constructor(pokemonId: number) {
        this.pokemonId = pokemonId;
        this.timesFavourited = 0;
      }
    
      public getId(): number {
        return this.pokemonId;
      }

      public getTimesFavourited(): number {
        return this.timesFavourited;
      }

      public addFavouritedTimes(): void {
        this.timesFavourited++;
      }
}

export default PokemonFavourite;