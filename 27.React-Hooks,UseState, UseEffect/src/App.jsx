import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import burger from "./assets/Img/burger.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setCount(parseInt(value));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="product_card">
          <div className="imgContainer">
            <h2>𝒞𝒽ℯℯ𝓈ℯ</h2>
            <h3>𝔅𝔲𝔯𝔤𝔢𝔯</h3>
            <img src={burger} alt="burger" />
            <div className="componetnt">
              <h4>𝔦𝔫𝔮𝔲𝔦𝔯𝔦𝔡𝔢𝔫𝔱</h4>
                <p>
                 🥒 – Cucumber  
                </p>
                
                <p>
                  🍅 – Tomato
                </p>
                <p>
                  🥩 – Meat
                </p>
                 
                
            </div>
            <div className="countContainer">
              <button className="add" onClick={increment}>
                <i className="bi bi-plus-circle"></i>
              </button>
              <p>{count}</p>
              <button className="del" onClick={decrement}>
                <i className="bi bi-dash-circle"></i>
              </button>
            </div>
            <div className="priceContainer">
              <h5>Price: 5</h5>
              <i className="bi bi-cash-coin"></i>
            </div>
            <div className="selectContainer">
              <select onChange={handleSelectChange} value={selectedValue}>
                <option value="">-- Choose One --</option>
                <option value="5">x5</option>
                <option value="10">x10</option>
                <option value="25">x25</option>
                <option value="50">x50</option>
                <option value="100">x100</option>
              </select>
            </div>
            <div className="totalSum">
              <h5>𝑇𝑜𝑡𝑎𝑙 𝑃𝑟𝑖𝑐𝑒 {count * 5}$</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
