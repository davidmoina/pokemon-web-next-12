import Head from "next/head";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window !== "undefined" ? window.location.origin : "";

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
        <meta
          property="og:title"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main className="px-3">{children}</main>
    </>
  );
};
