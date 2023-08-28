import { Chip, Stack } from "@mui/material"

type Props = {
  pokemons: Pokemon[];
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export default function Chips({ pokemons, setCurrent }: Props) {

  return (
    <Stack direction="row" gap={"12px 6px"} flexWrap="wrap" alignContent="center" flex="1 1 50%" >
      {pokemons.map(pokemon => <Chip 
          label={pokemon.name}
          key={pokemon.url} 
          onClick={() => setCurrent(Number(pokemon.url.split('/')[6]))}
          color="primary"
          style={{
            fontSize: 20,
            padding: "30px 8px",
            borderRadius: 30
          }}
        />
      )}
    </Stack>
  )
}