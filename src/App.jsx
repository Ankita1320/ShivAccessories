import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppWrapper } from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Ensure this import exists

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route */}
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;