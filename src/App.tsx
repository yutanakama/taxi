import { BrowserRouter } from 'react-router-dom';

import './compornents/css/Reset.css';
import './compornents/css/HumBtn.css';
import './compornents/css/App.css';
import { Router } from './compornents/router/Router';





function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>

  );
}

export default App;
