// AppRouter.js
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { useState } from 'react';
import TestApp from '../components/test_app';
import Login from '../components/login';
import Completion from '../components/completion';

function AppRouter() {
  const [token, setToken] = useState(sessionStorage.getItem("access_token"));
  const [status, setStatus] = useState(false);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login ambilToken={setToken} ambilStatus={setStatus}/>} />
      <Route 
        path='/done'
        element={<Completion />}
      />
      <Route
        path="/matrix-calculator"
        element={
            token ? (
              status ? (
                <Navigate to="/done" />
                ) : (
        <       TestApp npm={token} />
              )
            ) : (
          <Navigate to="/" />
        )
  }
/>

      {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
