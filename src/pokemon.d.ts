type Pokemon = {
  name: string,
  url:  string
}

type PokemonInfo = {
  height:   number;
  id:       number;
  name:     string;
  stats:    Stat[];
  weight:   number;
  sprites: Sprites;
}

type PokemonSpecies = {
  base_happiness:       number;
  capture_rate:         number;
  color:                StatInfo;
  flavor_text_entries:  FlavorTextEntry[];
  forms_switchable:     boolean;
}

type FlavorTextEntry = {
  flavor_text: string;
  language:    StatInfo;
  version:     StatInfo;
}

type Stat = {
  base_stat: number;
  effort:    number;
  stat:      StatInfo;
}

type StatInfo = {
  name: string;
  url:  string;
}

type Sprites = {
  back_default:         string;
  back_female?:         string;
  back_shiny:           string;
  back_shiny_female?:   string;
  front_default:        string;
  front_female?:        string;
  front_shiny:          string;
  front_shiny_female?:  string;
}