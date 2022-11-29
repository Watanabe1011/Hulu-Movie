import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Header, Main, Navbar } from "../components";
import { Result } from "../utils/interface/movieInterface";
import requests from "../utils/requests";

type Props = {
  results: Result[];
};

const Home: NextPage<Props> = ({ results }) => {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN */}
      <Main results={results} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query?.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await request.json();

  return {
    props: {
      results: data.results,
    },
  };
};
