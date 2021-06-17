import Layout from "../components/Layout";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";
import { PageConfig } from "../config";
import React from "react";
import jsPDF from 'jspdf';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
export default class App extends React.Component {
  constructor({ Component, pageProps }) {
		super()
    this.Component = Component;
    this.pageProps = pageProps;
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout
          pageTitle={PageConfig.title}
          description={PageConfig.description}
        >
          <this.Component {...this.pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
