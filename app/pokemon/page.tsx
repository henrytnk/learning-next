import axios from "axios";
import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
}

const PokemonPage = async () => {
  let pokemonData: Pokemon[] = [];

  try {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    pokemonData = pokemon.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }

  return (
    <section>
      <h2>Pokemon</h2>
      <ul>
        {pokemonData.map(pokemon => {
          const { name, url } = pokemon;
          const pokemonId = name

          return <li key={name}>
            <Link href={`/pokemon/${name}`}>
              {name}
            </Link>
          </li>
        })}
      </ul>
    </section>
  )
}

export default PokemonPage