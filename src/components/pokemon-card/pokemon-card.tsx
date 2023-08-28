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
  const [name, setName] = useState('')
  const [height, setHeight] = useState(0)
  const [attack, setAttack] = useState(0)
  const [image, setImage] = useState('')
  const [episodes, setEpisodes] = useState(0)

  useEffect(() => {
    getPokemon(id).then(pokemon => {
      const attackStat = pokemon.stats.find(stat => stat.stat.name === 'attack')
      setName(pokemon.name)
      setHeight(pokemon.height)
      attackStat && setAttack(attackStat.base_stat + Math.floor(attackStat.effort / 4))
      setImage(pokemon.sprites.front_shiny)
    }).catch(err => console.log(err))
    getPokemonEpisodes(id).then(amount => setEpisodes(amount))
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