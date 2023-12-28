import { PokemonResponse, SimplePokemon, SinglePokemonResponse } from "@/types/pokemons";
import { formatPokemonResponse } from "@/utils/format";

const baseUrl = process.env.pokemonBaseUrl;

export async function getPokemons(limit: number = 20, offset: number = 0): Promise<SimplePokemon[]>{
  const response = await fetch(
    `${baseUrl}/pokemon?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 86_400 },
    }
  );
  const data: PokemonResponse = await response.json();
  // throw new Error('Error');
  return formatPokemonResponse(data);
}

export async function getPokemon (nameOrId: string | number): Promise<SinglePokemonResponse> {
  const response = await fetch(
    `${baseUrl}/pokemon/${nameOrId}`,
    {
      cache: 'force-cache',
    }
  );
  const data: SinglePokemonResponse = await response.json();
  return data;
}