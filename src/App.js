// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';

import RouterRoute from './Components/Routes/RouterRoute';
// import Footer from './components/common/Footer';
// import BackTop from './components/common/BackTop';
// import { FiltersProvider } from './contexts/filters/filtersContext';
import Header from './Components/Common/Header';


const App = () => {
  return (
    <>
      {/* <CommonProvider> */}
        {/* <FiltersProvider> */}
          {/* <CartProvider> */}
          <Header/>
          {/* <RouterRoute/> */}
          <RouterRoute/>
        
            {/* <Footer /> */}
            {/* <BackTop /> */}
          {/* </CartProvider> */}
        {/* </FiltersProvider> */}
      {/* </CommonProvider> */}
    </>
  );
};

export default App;