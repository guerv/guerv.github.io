import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import  Home  from './pages/Home'
import  Art  from './pages/Art'
import Projects from './pages/Projects'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/art' element={<Art />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
