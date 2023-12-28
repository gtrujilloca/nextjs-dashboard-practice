import { Metadata } from "next";
import Image from "next/image";

import { getPokemon, getPokemons } from "@/services";
import { notFound } from "next/navigation";
import { PokemonDetail } from "@/components";

interface Props {
  params: { id: string };
}


export async function generateStaticParams() {
 const pokemons = await getPokemons(151);
 return pokemons.map(({id}) => ({id}));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon(params.id);

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

export default async function PokemonPage({ params }: Props) {

  try {
    const pokemon = await getPokemon(params.id);

    return (
      <PokemonDetail pokemon={pokemon} />
    );

  } catch (error) {
    notFound();
  }

}