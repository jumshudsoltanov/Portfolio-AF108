
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Components/Products/Product";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-5">Yüklənir…</div>;
  if (error) return <div className="text-danger text-center mt-5">Xəta: {error.message}</div>;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Məhsullar</h2>
        <Product products={products} setProducts={setProducts} />
      </div>
    </>
  );
}

export default App;
