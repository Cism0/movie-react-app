import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated method for React 18+
import App from './App';  // Import the main App component

// Create a root container to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
