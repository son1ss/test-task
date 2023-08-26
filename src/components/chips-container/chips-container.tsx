import Chips from "@/components/chips/chips";
import PokemonCard from "@/components/pokemon-card/pokemon-card";
import { getPokemons } from "@/utils/api";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";


export default function ChipsContainer() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [currentPokemonURL, setCurrentPokemonURL] = useState('')

  useEffect(() => {
    getPokemons().then(pokemons => {
      setPokemons(pokemons);
      setCurrentPokemonURL(pokemons[0].url)
    })
  }, [])
  
  return (
    <Container>
      <Box display="flex" flexDirection="row" justifyContent="center" gap={1.6}>
        <Chips pokemons={pokemons} setCurrent={setCurrentPokemonURL} />
        <PokemonCard url={currentPokemonURL} />
      </Box>
    </Container>
  )
}