import './App.css';
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom";
import LandingPage from './containers/LandingPage/LandingPage';
import {storeVisitorDemographics, storeVisitorLocation } from './utils/visitor-tracker';

import visitorMapStore, { STORE_VISITOR_TOKEN }  from './hooks-store/stores/visitor-map';
import screenDimensionsStore, { SET_SCREEN_DIMENSIONS } from './hooks-store/stores/screen-dimensions';
import { fetchVisitorCookie, storeVisitorCookie, storeVisitTime } from './visitor-cookies/visitor-cookies';
import { useEffect } from 'react';
import randomTokenGenerator from './utils/random-token-generator';
import { useStore } from './hooks-store/store';

visitorMapStore();
screenDimensionsStore();

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
      storeVisitorLocation(visitorToken as string, "Came back/refreshed");
    }
    storeVisitTime();
    dispatch(STORE_VISITOR_TOKEN, visitorToken);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", screenResizeHandler);

    return () => {
      window.removeEventListener("resize", screenResizeHandler);
    }
  }, []);

  const screenResizeHandler = () => {
    dispatch(SET_SCREEN_DIMENSIONS, {width: document.documentElement.clientWidth, height: window.innerHeight});
  };

  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
