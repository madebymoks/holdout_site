import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import HoldoutPage from './pages/HoldoutPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/holdout" element={<HoldoutPage />} />
        <Route path="/games/holdout/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
