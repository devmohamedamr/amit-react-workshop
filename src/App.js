import Login from './components/Login';
import Navbar from './components/Navbar'
import Register from './components/Register';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
