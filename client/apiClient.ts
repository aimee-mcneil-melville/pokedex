import request from 'superagent'
import { Pokemon, PokemonList } from '../models/pokemon'

const url = 'https://pokeapi.co/api/v2/'

export async function fetchPokemonList(): Promise<PokemonList[]> {
  const res = await request.get(`${url}/pokemon/?limit=151`)
  return res.body.results
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await request.get(`${url}/pokemon/${name}`)
  return res.body
}