import {useState} from 'react';
import './App.css';
import AppProduct from './component/AppProduct/index';

function App() {

  const [product, setProduct] = useState([])

  const addProduct = (productNew) => {
    // console.log('App', productNew);
    setProduct(productNew);

  }
  console.log('App', product);

  return (
    <div className="App">
      <h1>Đây là Giang Phan - FORM -HOOK !!!</h1>
      <AppProduct onAdd={addProduct}  />

    </div>
  );
}

export default App;
