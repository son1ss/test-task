type Props = {
  url: string
}

export default function PokemonCard({ url }: Props) {

  return (
    <div>{url}</div>
  )
}