import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './Components/Screens/Home'
import AboutEvent from "./Components/Screens/AboutEvent";
import Form from './Registration/Form'
import About from "./Components/Screens/About";
import Gallery from "./Components/Screens/Gallery";
import Feedback from "./Components/Screens/Feedback";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutevent' element={<AboutEvent />} />
        <Route exact path='/registration' element={<Form />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/Feedback' element={<Feedback />} />
      </Routes>
    </Router>

  );
}

export default App;