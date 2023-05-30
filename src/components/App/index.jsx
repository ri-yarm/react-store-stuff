import AppRoutes from '../Routes/Routes';

import SideBar from '../SideBar';

import Header from '../Header';
import Footer from '../Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../features/categories/categoriesSlice';
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRoutes />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
