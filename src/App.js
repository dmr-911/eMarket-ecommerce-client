import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Bag from './Pages/Bag/Bag/Bag';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <Navigation></Navigation>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="product_details/:key" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="bag" element={<Bag></Bag>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="checkout" element={<PrivateRoute><Checkout></Checkout></PrivateRoute>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router> 
      <Footer></Footer>        
      </AuthProvider>
    </div>
  );
}

export default App;
