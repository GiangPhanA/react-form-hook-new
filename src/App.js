import {useState} from 'react';
import './App.css';
import AppProduct from './component/AppProduct/index';

function App() {

  const [product, setProduct] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobsProduct'))
    console.log(storageJobs)

    return storageJobs || [];

});


  const addProduct = (productNew) => {
    // console.log('App', productNew);
    //setProduct([...product, productNew]);
    setProduct(prev => {
      const newProduct = [...prev, productNew];
      const jsonProduct = JSON.stringify(productNew)
          // lưu vào bộ nhớ cục bộ
      localStorage.setItem('jobsProduct', jsonProduct)
      return newProduct;
      
  })

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
