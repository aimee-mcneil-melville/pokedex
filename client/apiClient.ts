import request from 'superagent'
import { PokemonList } from '../models/pokemon'

const url = 'https://pokeapi.co/api/v2/'

export async function fetchPokemonList(): Promise<PokemonList[]> {
  const res = await request.get(`${url}/pokemon/?limit=151`)
  return res.body.results
}