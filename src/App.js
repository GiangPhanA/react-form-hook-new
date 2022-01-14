import {useState} from 'react';
import './App.css';
import AppProduct from './component/AppProduct/index';

function App() {

  const [product, setProduct] = useState([]);


  const addProduct = (productNew) => {
    // console.log('App', productNew);
    setProduct([...product, productNew]);

  }
  console.log('App', product);

  return (
    <div className="App">
      <h1>Đây là Giang Phan - FORM -HOOK !!!</h1>
      <AppProduct onAdd={addProduct}  />

      <h2>Dữ liệu ở APP</h2>

      <ul>
                {product.map((job, index) => (
                    <li key={index}>{job.productName} {job.productPrice} {job.productCategory}</li>

                ))}

       </ul>
   



    </div>
  );
}

export default App;
