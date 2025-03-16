// Using a more direct approach with react-router@6.22.0+
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

// Use all available future flags and use createBrowserRouter's newer API
const routerConfig = {
  // Set every future flag to true
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_prependBasename: true,
  },
  // Silent development warning noise (bad practice for production, but useful for development)
  unstable_viewTransition: false,
};

// Define routes
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  }
];

// Create and export the router
export const router = createBrowserRouter(routes, routerConfig);
