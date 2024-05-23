
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';


function App() {
  return(
    <>
  <div className='overflow-hidden relative bg-black'>
<Navbar/>
<Outlet/>
<Footer />
</div>
    </>
  
  )
}

export default App;
