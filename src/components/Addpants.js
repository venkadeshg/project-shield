import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPants() {
    const[values,setValues]=useState({
      
    })
    const navigate=useNavigate()
   const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/pants',values)
            .then(res => {
                console.log(res);
                navigate('/pants')
            })
            .catch(err => console.log(err))
    
   }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'> Add a Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='productName'><strong>Product Name :</strong> </label>
                        <input type='text' name='name' className='form-control' placeholder='Enter product name' 
                        onChange={e=> setValues({...values,name:e.target.value})}/>
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='price'><strong>Price:</strong> </label>
                        <input type='number' name='price' className='form-control' placeholder='Enter price'
                         onChange={e=> setValues({...values,price:e.target.value})}/>
                    </div> 
                    <div className='pt-3'>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/pants" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default AddPants

