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
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
