import React, { useRef } from 'react';
import { useState } from 'react';

const AddProduct = ({onAdd}) => {
    const [fields, setFields] = useState({
        productName: '',
        productPrice: '',
        productCategory: ''

    });

    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        console.log(storageJobs)

        return storageJobs || []

    });
    const inputRef = useRef();

    const onHandleChange = (e)=> {
        console.log(e.target);
        const {name, value} = e.target;
        setFields({
            ...fields,
            [name] : value
        });
        

    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setJobs(prev => {
            const newfields = [...prev, fields];
            const jsonFields = JSON.stringify(newfields)
                // lưu vào bộ nhớ cục bộ
            localStorage.setItem('jobs', jsonFields)
            return newfields;
            
        });

        setFields({
            productName: '',
            productPrice: '',
            productCategory: ''
    
        });
        inputRef.current.focus();
        console.log(jobs);
         onAdd(fields);

    }
    return (
        <div>
            <form onSubmit = {onHandleSubmit}>
                <div className="container col-sm-3 " >
                <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Product name</label>
                    <input type="text" value={fields.productName} name="productName" className="form-control"
                    ref = { inputRef } id="productname" aria-describedby="productname"
                    placeholder='Product name'  onChange={onHandleChange}/>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="productprice" className="form-label">Price</label>
                    <input type="text" value={fields.productPrice} name="productPrice" className="form-control" id="productprice" aria-describedby="productname"
                    placeholder='Product price'  onChange={onHandleChange}/>
                    
                </div>
                
                <div className="mb-3">
                    <label htmlFor="productcategory" className="form-label">Category</label>
                    <select name="productCategory" id="productcategory" defaultValue= "" onChange={onHandleChange} >
                        <option value="" selected hidden></option>
                        <option value="adidas" >adidas</option>
                        <option value="nike">nike</option>
                    </select>
                    
                    
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job.productName} {job.productPrice} {job.productCategory}</li>

                ))}

                </ul>
                

                </div>
                
        </form>
           
        </div>
    )
}

export default AddProduct;
