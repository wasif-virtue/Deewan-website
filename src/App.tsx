import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Buffet from './pages/Buffet'
import Takeaway from './pages/Takeaway'
import PayAsYouWish from './pages/PayAsYouWish'
import Events from './pages/Events'
import News from './pages/News'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buffet" element={<Buffet />} />
          <Route path="/takeaway" element={<Takeaway />} />
          <Route path="/pay-as-you-wish" element={<PayAsYouWish />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App