import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Cart
 from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App m-0 p-0 box-border">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
