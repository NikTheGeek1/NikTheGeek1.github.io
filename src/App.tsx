import './App.css';
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import LandingPage from './containers/LandingPage/LandingPage';
import {storeVisitorDemographics, storeVisitorLocation} from './utils/visitor-tracker';

import visitorMap from './hooks-store/stores/visitor-map';
import { fetchVisitorCookie, storeVisitorCookie } from './visitor-cookies/visitor-cookies';
import { useEffect } from 'react';
import randomTokenGenerator from './utils/random-token-generator';
import { STORE_VISITOR_TOKEN } from './hooks-store/stores/visitor-map';
import { useStore } from './hooks-store/store';

visitorMap();

function App() {
  const dispatch = useStore(false)[1];

  useEffect(() => {
    let visitorToken: string | null;
    visitorToken = fetchVisitorCookie();
    if (!visitorToken) {
      visitorToken = randomTokenGenerator(10);
      storeVisitorCookie(visitorToken);
      storeVisitorDemographics(visitorToken);
    } else {
      storeVisitorLocation(visitorToken as string, "Came back");
    }
    dispatch(STORE_VISITOR_TOKEN, visitorToken);
    window.onbeforeunload = (e:BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
      storeVisitorLocation(visitorToken as string, "refreshed/exited");
      return "";
    };
  }, []);

  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
