import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Header, Main, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN */}
      <Main />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;

  console.log(genre)

  return {
    props: {},
  };
};
