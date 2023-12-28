import { PokemonGrid } from "@/components";

export default async function FavoritesPage() {
  return (
    <section className="flex flex-col">
      <h1 className="text-5xl my-2">Favorite pokemons <small>static</small></h1>

      <PokemonGrid pokemons={[]} />
    </section>
  );
}