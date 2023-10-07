// AppRouter.js
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { useState } from 'react';
import TestApp from '../components/test_app';
import Login from '../components/login';

function AppRouter() {
  const [token, setToken] = useState(sessionStorage.getItem("access_token"));
  console.log("Token: ", token);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login ambilToken={setToken}/>} />
      <Route
        path="/matrix-calculator"
        element={token ? <TestApp /> : <Navigate to="/" />}
      />
      {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
