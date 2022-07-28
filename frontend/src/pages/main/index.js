import { Route, Routes } from 'react-router-dom';
import Create from './../blog/create/index';
import Detail from './../blog/detail/index';
import Home from './../home/index';
import { Header, Footer } from './../../components';

const Main = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/details/:id' element={<Detail />} />
          <Route path='/create' element={<Create />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
