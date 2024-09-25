import { useQuery } from "@tanstack/react-query"
import { fetchPokemonList } from "../apiClient"
import PokemonCard from "./PokemonCard"

export default function App(){

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
    <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Pokémon List</h1>
    <div className="w-1/3 p-4">
    <div className="space-y-4">
{data.map((pokemon) => (
  <PokemonCard key={pokemon.name} name={pokemon.name}></PokemonCard>
))}
</div>
</div>
</div>
    </>
  )
  }
}
