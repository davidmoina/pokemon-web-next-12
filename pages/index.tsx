import type { GetStaticProps, NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Listado de pokemons">
      <Button color="gradient">Hola mundo</Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await fetch("");

  return {
    props: {},
  };
};

export default Home;
