import './index.css';

import React from 'react';

import posthog from 'posthog-js';
import ReactDOM from 'react-dom/client';
import { SlateProvider } from 'slate-ui';

import App from './App';
import Privacy from './privacy';
import reportWebVitals from './reportWebVitals';

posthog.init("phc_GumBfH2sDPA0iuqX5XN7e0JX2sR7uPUXCmdK3KMoWb0", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SlateProvider>
      {window.location.pathname === "/" && <App />}
      {window.location.pathname === "/privacy" && <Privacy />}
    </SlateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
