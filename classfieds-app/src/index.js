import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import graphqlClient from "./api/graphql/Client";
import Root from "./components/Root";

import * as theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html, body, #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;

render(
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
