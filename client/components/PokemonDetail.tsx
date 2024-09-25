import { Pokemon } from "../../models/pokemon"

interface props {
  pokemon: Pokemon
}

export default function PokemonDetail(props:props){
  const {pokemon} = props

  
  return (
    <>
      <h2 className="text-2xl font-bold text-pink-400 text-center mb-6">{pokemon.name}</h2>
    <div className="bg-yellow-100 border-2 border-green-300 w-full rounded-lg shadow-lg flex items-center justify-center">
      <img alt={`front view of ${pokemon.name}`} src={pokemon.sprites.front_default}/>
        <div className="flex justify-between  p-8 ">
          <div>
          <p className="text-gray-600 p-4"><span className="font-semibold text-pink-400 text-l">XP: </span>{pokemon.base_experience}</p> 
            <ul className="text-gray-600 p-4">
            <p className="font-semibold text-pink-400 text-l">Abilities:</p>
              {pokemon.abilities.map((a) => (
                <li key={a.slot}>
                  {a.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="text-gray-600 p-4">
            <p className="font-semibold text-pink-400 text-l">Stats:</p>
              {pokemon.stats.map((s) => (
                <li key={s.stat.name}>
                    {s.stat.name}: {s.base_stat}
                  </li>
                ))}
            </ul>
         </div>
      </div>
    </div>
  </>
  )
}