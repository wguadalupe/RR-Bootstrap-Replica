
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/TopBar'
import MyFormCard from './components/location';

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyFormCard />
    </div>
  );
}

export default App;
