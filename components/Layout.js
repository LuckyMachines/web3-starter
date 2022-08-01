import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <title>Web3 Starter | Lucky Machines</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      {props.children}
    </Container>
  );
};

export default Layout;
