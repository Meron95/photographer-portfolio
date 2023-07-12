import { About, Contact, Gallery, Models, Projects } from './componenets/export';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import ModelList from './models/export.js';

function App() {

  const models = [
    { id: 1, name: 'Model 1', imageUrl: ModelList.img17 },
    { id: 2, name: 'Model 2', imageUrl: ModelList.img27 },
    { id: 3, name: 'Model 3', imageUrl: ModelList.img118 },
    { id: 4, name: 'Model 4', imageUrl: ModelList.img134 },
  ];

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button style={{ display: "relative", marginLeft: "auto", marginRight: "0"}} 
              className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                  <Link to="/" className="nav-link"><strong>About</strong></Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/models" className="nav-link"><strong>Models</strong></Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/projects' className='nav-link'><strong>Projects</strong></Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/contact' className='nav-link'><strong>Contact</strong></Link>
                  </li>
              </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route exact path='/' element={< About />}></Route>
        <Route path="/models" element={<Models models={models} />} />
        <Route path="/models/:id" element={<Gallery models={models}/>} />
        <Route exact path="/projects" element={<Projects/>}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
