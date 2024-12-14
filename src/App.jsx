import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './shared/Header/Header';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
