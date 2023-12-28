import { SimplePokemon } from "@/types/pokemons";
import { PokemonCard } from "..";

interface Props {
  pokemons: SimplePokemon[]
}

const PokemonGrid: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10">
      {pokemons.map(({ id, name }) => (
        <PokemonCard pokemon={{id, name}} key={id}/>
      ))}
    </div>
  );
}

export default PokemonGrid;