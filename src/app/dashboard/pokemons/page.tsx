import { PokemonGrid } from "@/components";
import { getPokemons } from "@/services";

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <section className="flex flex-col">
      <h1 className="text-5xl my-2">Pokemon list <small>static</small></h1>

      <PokemonGrid pokemons={pokemons} />
    </section>
  );
}