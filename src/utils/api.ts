import axios from "axios";

const getData = <ResponseType>(url: string) => 
  axios.get<ResponseType>(`https://pokeapi.co/api/v2${url}`).then(response => Promise.resolve(response.data))

export const getPokemons = (amount: number) => getData<{results: Pokemon[]}>(`/pokemon?limit=${amount}`).then(response => response.results)

export const getPokemon = (id: number) => getData<PokemonInfo>(`/pokemon/${id}`)

export const getPokemonEpisodes = (id: number) => getData<PokemonSpecies>(`/pokemon-species/${id}`).then(({ flavor_text_entries }) => {
  const colors = new Set()
  return flavor_text_entries.filter(({ flavor_text }) => {
    if (colors.has(flavor_text)) {return false}
    colors.add(flavor_text)
    return true
  }).length
})