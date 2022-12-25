import { Container } from '@mui/material'
import './App.css'
import Lists from './components/Lists'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Container>
      <Header />
      <Lists />
      <Footer />
    </Container>
  )
}

export default App
