import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/header/NavBar'
import '../styles/globals.css'
import '../styles/Menu.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
