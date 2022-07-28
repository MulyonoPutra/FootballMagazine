import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './../../pages/main/index'
import Register from './../../pages/register/index'
import Login from './../../pages/login/index'
import Detail from './../../pages/blog/detail/index'
import Create from './../../pages/blog/create/index'

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='/create/:id' element={<Create />} />
      </Routes>
    </Router>
  );
};

export default Navigation;