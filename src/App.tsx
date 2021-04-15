import './App.css';
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import LandingPage from './containers/LandingPage/LandingPage';
import playerChoiseStore from './hooks-store/stores/current-page';

playerChoiseStore();

function App() {

  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
