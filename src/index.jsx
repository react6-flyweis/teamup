
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </LocationProvider>
    </QueryClientProvider>
  </BrowserRouter>
);


