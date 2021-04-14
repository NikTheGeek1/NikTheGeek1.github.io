import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
