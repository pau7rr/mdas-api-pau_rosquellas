import PokemonType from "./entities/pokemon-type.entity"
import { PokemonId, PokemonName, PokemonHeight, PokemonWeight, PokemonFavouritedTimes } from "./value-objects";


class PokemonAggregate {
  private readonly id: PokemonId;
  private readonly name: PokemonName;
  private readonly types: PokemonType[];
  private readonly height: PokemonHeight;
  private readonly weight: PokemonWeight;
  private readonly favouritedTimes: PokemonFavouritedTimes;

  constructor(id: PokemonId, name: PokemonName, types: PokemonType[], height: PokemonHeight, weight: PokemonWeight, favouritedTimes: PokemonFavouritedTimes) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.favouritedTimes = favouritedTimes;
  }

  public getId(): PokemonId {
    return this.id;
  }

  public getTypes(): PokemonType[] {
    return this.types;
  }

  public getName(): PokemonName {
    return this.name;
  }

  public getHeight(): PokemonHeight {
    return this.height;
  }

  public getWeight(): PokemonWeight {
    return this.weight;
  }
  
  public getFavouritedTimes(): PokemonFavouritedTimes {
    return this.favouritedTimes;
  }

}

export default PokemonAggregate;
