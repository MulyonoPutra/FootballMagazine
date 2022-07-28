import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Main, Register } from '../../pages';

const NavigationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};
export default NavigationRoutes;
