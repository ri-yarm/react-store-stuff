import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

const AppRoutes = () => (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );


export default AppRoutes;
