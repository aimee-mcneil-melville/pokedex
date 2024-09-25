import { useQuery } from "@tanstack/react-query"
import { fetchPokemonList } from "../apiClient"
import PokemonCard from "./PokemonCard"
import { useState } from "react"
import PokemonDetail from "./PokemonDetail"
import { Pokemon } from "../../models/pokemon"

export default function App(){

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  const handlePokemonClick = (pokemon:Pokemon) => {
    console.log(pokemon);
    
    setSelectedPokemon(pokemon)
  }

  const {
    data,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['list'], queryFn: () => fetchPokemonList() })

  if (isError) return <p>Error loading Pokemon</p>

  if (isLoading) return <p>Loading...</p>

  if (data) {
  return (
    <>
    <div className="bg-green-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Pokémon</h1>
        <div>
          <div className="flex">
            <div className="w-1/3 p-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-400 text-center mb-6">Select a Pokemon</h2>
                {data.map((pokemon) => (
                  <PokemonCard key={pokemon.name} name={pokemon.name} onClick={handlePokemonClick}></PokemonCard>
                ))}
              </div>
            </div>
            <div className="w-2/3 p-4 border-l border-gray-300 fixed right-0 top-1/4 h-full overflow-y-auto">
              {selectedPokemon ? (
                <PokemonDetail pokemon={selectedPokemon}/>
                ) : (
                <p>No Pokemon selected</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
