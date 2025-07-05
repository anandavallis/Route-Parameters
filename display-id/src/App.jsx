import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './components/User';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Dynamic Route</h1>  
        <nav>
          <Link to="/user/123">Go to User 123</Link>
        </nav>

        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
