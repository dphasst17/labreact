

import './App.css';
import Dashboard from './components/dashboard';
import Nav from './components/nav';

function App() { 
  
  return <div className='flex min-h-[99vh]'>
    <Dashboard/>
    <Nav/>
  </div>;
}

export default App;
