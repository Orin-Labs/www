import './index.css';

import React from 'react';

import posthog from 'posthog-js';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

import App from './App';
import BlogRouter from './blog/blog-router';
import Memo from './memo';
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

// Helper function to get the current route
const getCurrentRoute = () => {
  const path = window.location.pathname;
  return path;
};

// Route component mapping
const getRouteComponent = () => {
  const route = getCurrentRoute();

  switch (route) {
    case "/":
      return <App />;
    case "/privacy":
      return <Privacy />;
    case "/memo":
      return <Memo />;
    default:
      // Handle all blog routes with the blog router
      if (route.startsWith("/blog")) {
        return <BlogRouter path={route} />;
      }

      // If no route matches, show the home page
      return <App />;
  }
};

root.render(
  <React.StrictMode>
    <Toaster />
    {getRouteComponent()}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
