import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;