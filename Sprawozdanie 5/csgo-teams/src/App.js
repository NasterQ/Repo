import './App.css';
import Header from './Header'
import Teams from './Teams'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import teams_photo from './img/teams-photo-cut.jpg';
import TeamDetail from './TeamDetail'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/team/:id' component={TeamDetail} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <h2>This is a home page of the site</h2>
    <p>Check out our list of teams with specific details</p>
    <Teams />
    <img src={teams_photo} alt="Photo of the teams" width="1000"></img>
  </div> 
)

export default App;
