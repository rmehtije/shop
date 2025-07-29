import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './services/state/store';
import UserProvider from './providers/UserProvider';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </BrowserRouter>
)
