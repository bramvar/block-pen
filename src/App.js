import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import './App.css';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
        <Container className="w-100" style={{margin:"0px",padding:"0px",border:"0px",maxWidth:"100%"}}>
          <Router basename="">
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </Router>
        </Container>
    </div>
  );
}

export default App;
