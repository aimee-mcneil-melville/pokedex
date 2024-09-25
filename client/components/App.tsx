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
<div>
<h1>Pokémon List</h1>
{data.map((pokemon) => (
  <PokemonCard key={pokemon.name} name={pokemon.name}></PokemonCard>
))}
</div>
    </>
  )
  }
}
