import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/Layout/Admin';
import Auth from './components/Layout/Auth';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to='/auth/login' />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' />
        </Route>
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
