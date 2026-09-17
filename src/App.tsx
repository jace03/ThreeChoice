import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home'
import { SiteA } from './sites/site-a/SiteA'
import { SiteB } from './sites/site-b/SiteB'
import { SiteC } from './sites/site-c/SiteC'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/site-a" element={<SiteA />} />
      <Route path="/site-b" element={<SiteB />} />
      <Route path="/site-c" element={<SiteC />} />
    </Routes>
  )
}

export default App
