import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ChooseCity from './components/ChooseCity'
import ShowCity from './components/ShowCity'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h3 className='mb-5'>Weather App</h3>
          <div className='row'>
            <div className='col-6 pr-5'>
              <ChooseCity />
            </div>
            <div className='col-6'>
              <ShowCity />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
