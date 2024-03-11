import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgOverlay from './components/ImageOverlay';
import StoreBrowser from './components/StoreListing';

import MyNav from './components/TopBar';
import MyFullPageForm from './components/location';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<MyFullPageForm />} exact />
          <Route path="/overlay" element={<ImgOverlay />} />
          <Route path="/stores" element={<StoreBrowser />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
