import { Footer, Header } from '../../components';
import { Route, Routes } from 'react-router-dom';
import { Home, ArticleDetails, ArticleCreate } from '../index';

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<ArticleDetails />} />
        <Route path='/create' element={<ArticleCreate />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default Main;
