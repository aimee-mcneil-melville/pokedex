export interface PokemonList {
  id: number
  name: string
  pokemon_species: Array<ApiResource>
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  sprites: {
    front_default: string
    back_default: string
  }
  abilities: Array<Ability>
  types: Array<Type>
  stats: Array<Stat>
}

export interface ApiResource {
  name: string
  url: string
}

interface Ability {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

interface Type {
  slot: number
  type: { name: string; url: string }
}

interface Stat {
  stat: { name: string; url: string }
  effort: number
  base_stat: number
}