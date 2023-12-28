import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "@/types/pokemons";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}
const POkemonCard: React.FC<Props> = ({ pokemon }) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={100}
            height={100}
            alt={`Pokemon ${name}`}
            priority={false}
          />

          <p className="pt-2 capitalize text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More..
            </Link>
          </div>
        </div>
        <div className="border-b flex items-center">
          <Link href={`/dashboard/pokemon/${id}`} className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No favorite
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>

        </div>


      </div>
    </div>
  );
}

export default POkemonCard;