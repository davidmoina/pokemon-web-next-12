import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonsResponse, SmallPokemon } from "../interfaces";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            #{id} {name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
