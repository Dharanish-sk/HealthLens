import React, { useState } from 'react';
import Login from './Login';
import Upload from './Upload';

function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');    // Initialize token from localStorage

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 font-sans">
      {token ? <Upload token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;