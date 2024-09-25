import { useQuery } from "@tanstack/react-query"
import { fetchPokemon } from "../apiClient"

interface props {
  name: string
}

export default function PokemonCard(props:props){
  const {name} = props

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
<div>
<h2>{pokemon.name}</h2>
Id: {pokemon.id}
Height: {pokemon.height}
Weight: {pokemon.weight}
</div>

<ul>
        {pokemon.types.map((type) => (
          <li key={type.slot}>
 <p>Type: {type.type.name}</p>
</li>
        ))}
      </ul>

    </>
  )
  }
}
