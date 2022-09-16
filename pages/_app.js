import { Layout } from "../components/shared/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} />
</Layout>
}
export default MyApp
