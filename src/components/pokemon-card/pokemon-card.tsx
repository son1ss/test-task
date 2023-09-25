import { getPokemon, getPokemonEpisodes } from "@/utils/api"
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

type Props = {
  id: number
}

function numWord(value: number){  
  const num = Math.abs(value) % 100 % 10;
  if(value > 10 && value < 20) return 'сериях'; 
  if(num == 1) return 'серии'; 
  return 'сериях';
}

export default function PokemonCard({ id }: Props) {
  const [currentPokemon, setCurrentPokemon] = useState({
    name: '',
    height: 0,
    attack: 0,
    image: '',
    episodes: 0,
  })
  const { name, height, attack, image, episodes } = currentPokemon

  useEffect(() => {
    getPokemon(id).then(pokemon => {
      const attackStat = pokemon.stats.find(stat => stat.stat.name === 'attack')
      setCurrentPokemon(prev => ({
        ...prev,
        name: pokemon.name,
        height: pokemon.height,
        image: pokemon.sprites.front_shiny,
        attack: attackStat ? attackStat.base_stat + Math.floor(attackStat.effort / 4) : 0,
      }))
    }).catch(err => console.log(err))
    getPokemonEpisodes(id).then(amount => setCurrentPokemon(prev => ({...prev, episodes: amount})))
  }, [id])

  return (
    <Box 
      p={5.5} 
      display="flex" 
      flexDirection="column" 
      boxSizing="border-box"
      bgcolor="#000"
      color="#a0a0a0" 
      gap={4.4} 
      flex="1 1 50%"
    >
      <Typography variant="h3" fontWeight={700} component="h2">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Box 
        component="img" 
        src={image}
        alt="покемон" 
        height={210}
        alignSelf="center"
        style={{objectFit: 'cover', overflow: 'hidden', aspectRatio: 5/4.1}}
      />
      <Box>
        <Typography component="p" fontSize={17}>Снялся в {episodes} {numWord(episodes)}</Typography>
        <Typography component="p" fontSize={17}>Id: {id}</Typography>
        <Typography component="p" fontSize={17}>height: {height}</Typography>
        <Typography component="p" fontSize={17}>attack: {attack}</Typography>
      </Box>
    </Box>
  )
}