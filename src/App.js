import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Library from './pages/library';
import Account from './pages/account';
import Messages from './pages/messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
