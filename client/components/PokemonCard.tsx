import { useQuery } from "@tanstack/react-query"
import { fetchPokemon } from "../apiClient"
import { Pokemon } from "../../models/pokemon";

interface props {
  name: string
  onClick: (pokemon: Pokemon) => void;
}

export default function PokemonCard(props:props){
  const {name, onClick} = props

  const {
    data: pokemon,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['pokemon', name], queryFn: () => fetchPokemon(name) })

  if (isError) return <p>Error loading Pokemon</p>

  if (isLoading) return <p>Loading...</p>

  if (pokemon) {

  return (
  <>
    <div className="bg-yellow-100 border-2 border-green-300 px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:border-pink-300">
      <button onClick={() => onClick(pokemon)} >
        <h2 className="text-2xl font-bold text-green-600">{pokemon.name}</h2>
          <div className="flex justify-between">
            <div className="text-gray-600">
              <p>Id: {pokemon.id}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="">
              <p className="font-semibold text-pink-400 text-xl">Types:</p>
                <ul className="list-none text-gray-600">
                  {pokemon.types.map((type) => (
                    <li key={type.slot}>
                      {type.type.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </button>
      </div>
    </>
    )
  }
}
