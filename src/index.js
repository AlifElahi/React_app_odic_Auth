import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider, oidcLog } from "@axa-fr/react-oidc-context";
import oidcConfiguration from "./oidcconfig";
import Loading from './screens/Loading';
import { LoaderProvider } from './contexts/LoaderContext';

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <AuthenticationProvider
        authenticating={Loading}
        configuration={oidcConfiguration}
        loggerLevel={oidcLog.DEBUG}
      >
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
