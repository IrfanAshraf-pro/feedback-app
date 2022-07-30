import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from "./components/Header";
import './index.css'
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './Pages/AboutPage'
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './components/context/FeedbackContext'

function App() {
  
 
  return ( 
    <>
    <FeedbackProvider>
    <Router>
      <Header text='Feedback UI'/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats  />
              <Feedbacklist />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
    </>
  );
}

export default App;
