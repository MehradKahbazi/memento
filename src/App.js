import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/Layout/Admin';
import Auth from './components/Layout/Auth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Navigate to='/auth/login' />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Routes>
  );
}

export default App;
