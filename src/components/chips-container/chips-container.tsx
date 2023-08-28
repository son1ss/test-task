import Chips from "@/components/chips/chips";
import PokemonCard from "@/components/pokemon-card/pokemon-card";
import { getPokemons } from "@/utils/api";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";


export default function ChipsContainer() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [currentPokemonId, setCurrentPokemonId] = useState(1)

  useEffect(() => {
    getPokemons(10).then(pokemons => {
      setPokemons(pokemons);
      setCurrentPokemonId(Number(pokemons[0].url.split('/')[6]))
    }).catch(err => console.log(err))
  }, [])
  
  return (
    <Box component="section" display="flex" flexDirection={["column-reverse", "row"]} justifyContent="center" gap={1.6}>
      <Chips pokemons={pokemons} setCurrent={setCurrentPokemonId} />
      <PokemonCard id={currentPokemonId} />
    </Box>
  )
}