import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CustomRoutes from './routes/routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <Router>
      <Navbar />
      <CustomRoutes />
    </Router>

  );
}

export default App;
