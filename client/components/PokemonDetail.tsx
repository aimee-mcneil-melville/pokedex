import { Pokemon } from "../../models/pokemon"

interface props {
  pokemon: Pokemon
}

export default function PokemonDetail(props:props){
  const {pokemon} = props

  
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img alt={`front view of ${pokemon.name}`} src={pokemon.sprites.front_default}/>
      <p>XP: {pokemon.base_experience}</p>
        <ul>
          {pokemon.abilities.map((a) => (
            <li key={a.slot}>
              {a.ability.name}
            </li>
          ))}
        </ul>
        <ul>
          {pokemon.stats.map((s) => (
              <li key={s.stat.name}>
                {s.base_stat}
                {s.effort}
                {s.stat.name}
              </li>
            ))}
        </ul>
    </div>
  );
};