import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="David Moina" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex, pokeapi`} />
      </Head>
      <Navbar />
      <main className="px-3">{children}</main>
    </>
  );
};
