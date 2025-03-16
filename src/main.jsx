import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routerSetup'
import './suppressWarnings.js'  // Import the warning suppression
import './index.css'

// Clear any potential cache issues
if (import.meta.hot) {
  import.meta.hot.accept();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
