
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LocationProvider>
      <App />
    </LocationProvider>
  </BrowserRouter>
);

