import { Chip, Stack } from "@mui/material"

type Props = {
  pokemons: Pokemon[];
  setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export default function Chips({ pokemons, setCurrent }: Props) {

  return (
    <Stack direction="row" gap={0.8} flexWrap="wrap" >
      {pokemons.map(pokemon => <Chip 
        label={pokemon.name}
        key={pokemon.url} 
        onClick={() => setCurrent(pokemon.url)} 
        color="primary" />
      )}
    </Stack>
  )
}