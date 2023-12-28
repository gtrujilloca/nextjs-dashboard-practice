import { PokemonResponse, SimplePokemon } from "@/types/pokemons"

export const formatPokemonResponse = ({ results }: PokemonResponse): SimplePokemon[] => {
  return results.map(({name, url}) => ({
    id: url.split('/').at(-2)!,
    name
  }));
}