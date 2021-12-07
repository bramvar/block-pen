import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CollectionsView from './components/repository/CollectionsView';
import Dashboard from './components/Dashboard';
//import './App.css';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import PracticeOpView from './components/PracticeOpView';
import Repository from './components/Repository';
import SignUp from './components/SignUp';
import Statistics from './components/Statistics';
import ImagesView from './components/repository/ImagesView';

function App() {
  return (
    <div className="App">
        <Container className="w-100" style={{margin:"0px",padding:"0px",border:"0px",maxWidth:"100%"}}>
          <Router basename="">
            <Routes>
              <Route path="/landing" element={<LandingPage/>}/>
              <Route path="/" element={<Dashboard/>}>
                  <Route path="myrepo" element={<Repository />} >
                    <Route index element={<CollectionsView />} />
                    <Route path="d" element={<ImagesView />} />
                  </Route>  
                  <Route path="practice" element={<PracticeOpView />} />
                  <Route path="stats" element={<Statistics />} />
              </Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </Router>
        </Container>
    </div>
  );
}

export default App;
