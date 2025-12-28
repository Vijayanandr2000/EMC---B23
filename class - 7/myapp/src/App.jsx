import "./app.css";

import ProductItems from "./components/ProductItems";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <ProductItems></ProductItems>
      <Cart></Cart>
    </div>
  );
}

export default App;
