import background from './img/background.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <div style={{ 
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'

      }}>
        <HomePage/>
      </div>
      {/* Test Commit on new computer */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
    </>
  );
}

export default App;
