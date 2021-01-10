import Layout from "../components/Layout";
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'
import { PageConfig } from '../config'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
		<Layout pageTitle={PageConfig.title} description={PageConfig.description}>
			<Component {...pageProps} />
		</Layout>
    </ThemeProvider>
  );
}
