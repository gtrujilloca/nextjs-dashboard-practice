import { PokemonDetail } from "@/components";
import { getPokemon, getPokemons } from "@/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string }
}

export async function generateStaticParams() {
  const pokemons = await getPokemons(151);
  return pokemons.map(({name}) => ({name}));
 }


 export async function generateMetadata({ params }: Props): Promise<Metadata> {
   try {
     const { id, name } = await getPokemon(params.name);

     return {
       title: `#${id} - ${name}`,
       description: `Pokemon ${name} page`
     };
   } catch (error) {
     return {
       title: 'Pokemon not found',
       description: 'Pokemon not found'
     }
   }
 }

async function PokemonByNamePage({ params }: Props) {
  try {
    const pokemon = await getPokemon(params.name);

    return (
      <PokemonDetail pokemon={pokemon} />
    );

  } catch (error) {
    notFound();
  }
}

export default PokemonByNamePage;