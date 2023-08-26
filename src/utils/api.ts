import axios from "axios";

const getData = <ResponseType>(url: string) => 
  axios.get<ResponseType>(`https://pokeapi.co/api/v2${url}`).then(response => Promise.resolve(response.data))

export const getPokemons = () => getData<{results: Pokemon[]}>('/pokemon?limit=10').then(response => response.results)