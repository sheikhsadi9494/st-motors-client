import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expolre from "./pages/explore/Expolre";
import Purchase from "./pages/Purchase/Purchase";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Dashbord from "./pages/Dashbord/Dashbord/Dashbord";
import Orders from "./pages/Dashbord/Orders/Orders";
import MakePayment from "./pages/Dashbord/MakePayment/MakePayment";
import MakeReview from "./pages/Dashbord/MakeReview/MakeReview";
import MangeAllOrders from "./pages/Dashbord/ManageAllOrders/MangeAllOrders";
import AddCar from "./pages/Dashbord/AddCar/AddCar";
import MakeAdmin from "./pages/Dashbord/MakeAdmin/MakeAdmin";
import ManageCars from "./pages/Dashbord/ManageCars/ManageCars"
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Footer from "./pages/Shered/Footer/Footer";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="exploreCar" element={<Expolre />} />
            <Route path="dashbord/*" element={<PrivateRoute><Dashbord /></PrivateRoute>}>
              <Route index element={<Orders/>} />
              <Route path="makePayment" element={<MakePayment/>} />
              <Route path="review" element={<MakeReview/>} />
              <Route path="manageAllOrders" element={<AdminRoute><MangeAllOrders/></AdminRoute>} />
              <Route path="addCar" element={<AdminRoute><AddCar/></AdminRoute>} />
              <Route path="makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>} />
              <Route path="manageCars" element={<AdminRoute><ManageCars/></AdminRoute>} />
            </Route>
            <Route path="purchase/:productId" element={<PrivateRoute><Purchase/></PrivateRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
