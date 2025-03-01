import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './feature/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
