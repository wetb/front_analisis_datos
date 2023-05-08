import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import FirstQuestion from './pages/FirstQuestion'
import SecondQuestion from './pages/SecondQuestion'
import ThirdQuestion from './pages/ThirdQuestion'
import FourthQuestion from './pages/FourthQuestion'
import FifthQuestion from './pages/FifthQuestion'
import SixthQuestion from './pages/SixthQuestion'


const App = () => {
  return (
    <div>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='matriculas_municipio' exact Component={FirstQuestion} />
             <Route path='genero_matricula' exact Component={SecondQuestion} />
            <Route path='jornada_matricula' exact Component={ThirdQuestion} />
            <Route path='ie_matricula' exact Component={FourthQuestion} />
           <Route path='grado_matricula' exact Component={FifthQuestion} />
           <Route path='ie_metod' exact Component={SixthQuestion} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App

