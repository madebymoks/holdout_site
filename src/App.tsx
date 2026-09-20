import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import HoldoutPage from './pages/HoldoutPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/holdout" element={<HoldoutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
