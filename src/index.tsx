import './index.css';

import React from 'react';

import posthog from 'posthog-js';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from 'sonner';

import App from './App';
import BlogRouter from './blog/blog-router';
import Privacy from './privacy';
import reportWebVitals from './reportWebVitals';

if (window.location.hostname !== "localhost") {
  posthog.init("phc_GumBfH2sDPA0iuqX5XN7e0JX2sR7uPUXCmdK3KMoWb0", {
    api_host: "https://d3nk0c1kx1c6s3.cloudfront.net",
    ui_host: "https://us.posthog.com",
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog/*" element={<BlogRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
