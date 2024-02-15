import './App.css';
import SmallScreenMsg from './components/SmallScreenMsg';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
  <>
    <div className='AllContent'>
      <Dashboard/>
      </div>
    <div className='ShortScreenMsg'>
      <SmallScreenMsg/>
    </div>




  </>
  );
}

export default App;
