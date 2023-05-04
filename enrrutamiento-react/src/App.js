import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/productDetail/ProductDetail";
import Login from "./components/pages/login/Login"
import ProtectedRoutes from "./components/router/ProtectedRoutes"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>

          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

        </Route>
        
        {/* <Route path="*" element={<div>La Ruta no Existe</div>} /> */}

        <Route path="*" element={ <Navigate to="/"/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
