import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu Clone v2, Hulu" />
        <meta
          name="keywords"
          content="Hulu clone, Hulu clone v2, Movie App, Hulu App, Next.js, TailwindCSS, TypeScript clone"
        />
        <meta name="author" content="ErysCode7" />
        <link rel="shortcut icon" href="/hulu.png" type="image/x-icon" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
