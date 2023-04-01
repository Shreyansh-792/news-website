import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Categories from './Pages/Categories'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home />}/>
          <Route path = "/general" element = {<Categories cat={"general"} />}/>
          <Route path = "/business" element = {<Categories cat={"business"} />}/>
          <Route path = "/entertainment" element = {<Categories cat={"entertainment"} />}/>
          <Route path = "/health" element = {<Categories cat={"health"} />}/>
          <Route path = "/science" element = {<Categories cat={"science"} />}/>
          <Route path = "/sports" element = {<Categories cat={"sports"} />}/>
          <Route path = "/technology" element = {<Categories cat={"technology"} />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
