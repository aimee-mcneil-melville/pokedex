import { useQuery } from "@tanstack/react-query"
import { fetchPokemonList } from "../apiClient"

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
  <li key={pokemon.id}>{pokemon.name}</li>
))}
</div>
    </>
  )
  }
}
