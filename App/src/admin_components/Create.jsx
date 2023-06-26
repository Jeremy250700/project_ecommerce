import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Create() {

  const [values, setValues] = useState({
    name:'',
    price: '',
    image: '',
    qty: ''
  })
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post("http://localhost:3001/proteinEnergySnacks",values)
        .then(res => {
          console.log(res);
          navigate('/admin')
        })
        .catch(err => console.log(err));
  }

  return (<>
  <div class="bg-blue-200 min-h-screen flex items-center">
   <div class="w-full">
     <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add Product</h2>
     <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleSubmit}>
         <div class="mb-5">
           <label htmlFor="name" class="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" name="name" placeholder="Product Name." class="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={e=> setValues({...values, name: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="price" class="block mb-2 font-bold text-gray-600">Price</label>
           <input type="text" name="price" placeholder="Product Price." class="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={e=> setValues({...values, price: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="image" class="block mb-2 font-bold text-gray-600">Image</label>
           <input type="text" name="price" placeholder="Product Image." class="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={e=> setValues({...values, image: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="qty" class="block mb-2 font-bold text-gray-600">Qty</label>
           <input type="text" name="qty" placeholder="Product Qty." class="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={e=> setValues({...values, qty: e.target.value})}/>
         </div>

         <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Add</button>
       </form>
     </div>
   </div>
 </div>

  </>
  )
}
