import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./form.css";

const AddProduct = ({onAdd}) => {
    // const inputRef = useRef();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
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

    const onHandleSubmit = (data) => {
        console.log('data input form', data);
        onAdd(data);
        setFields(data);
        setJobs(prev => {
            const newfields = [...prev, fields];
            const jsonFields = JSON.stringify(newfields)
                // lưu vào bộ nhớ cục bộ
            localStorage.setItem('jobs', jsonFields)
            return newfields;
            
        })
        reset();
    }
    // console.log('field',fields)
    return (
        <div>
            <form onSubmit = {handleSubmit(onHandleSubmit)}>
                <div className="container col-sm-3 " >
                <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Product name</label>
                        <input type="text" name="productName" className="form-control" id = "productname"
                            aria-describedby="productname" {...register("productName", {
                                required: true,
                            })
                            }
                    placeholder='Product name' />
                    
                </div>
                    {
                        Object.keys(errors).length !== 0 && (<ul className="error-container" > {
                                errors.productName && errors.productName.type === "required" 
                                && < li > Name is required < /li>}  < /ul >)
                    }

                <div className="mb-3">
                    <label htmlFor="productprice" className="form-label">Price</label>
                    <input type="text"  name="productPrice" className="form-control" id="productprice" aria-describedby="productname"
                    placeholder='Product price'  {...register("productPrice", {
                        required: true,
                    })
                    }/>
                    
                </div>
                    {
                        Object.keys(errors).length !== 0 && (<ul className="error-container" >  {
                                errors.productPrice && errors.productPrice.type === "required" && (<
                                    li > Price is required < /li>
                                    )} 
                            </ul >)
                    }
                <div className="mb-3">
                    <label htmlFor="productcategory" className="form-label">Category</label>
                    <select name="productCategory" id="productcategory" defaultValue= "" {...register("productCategory", {
                        required: true,
                    })
                    } >
                        <option value="" selected hidden></option>
                        <option value="adidas" >adidas</option>
                        <option value="nike">nike</option>
                    </select>
                    
                    
                </div>

                    {
                        Object.keys(errors).length !== 0 && (<ul className="error-container" > {
                                errors.productCategory && errors.productCategory.type === "required" 
                                && < li > Category is required < /li>}  < /ul >)
                    }

              
                
                <button type="submit" className="btn btn-primary">Submit</button>

                <h2>Dữ liệu save form</h2>

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
