import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <Navigation></Navigation>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="product_details/:key" element={}></Route>
        </Routes>
      </Router>         
      </AuthProvider>
    </div>
  );
}

export default App;
