import './App.scss'
import Address from './components/Address/Address';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Address/>
    </div>
  );
}

export default App;
