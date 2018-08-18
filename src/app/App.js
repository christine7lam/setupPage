import React, { Component } from "react";
import { Layout } from "@paciolan/primitives";
import Create from "../pages/Create";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../global/theme";

injectGlobal`
  html {
    background-color: #e6e6e6;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout page>
          <Create />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
