import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

export default function Update() {

  const {id} = useParams();
  const [values, setValues] = useState({
    name:'',
    price: '',
    image: '',
    qty: ''
  })

  const navigate = useNavigate();
  const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put("http://localhost:3001/proteinEnergySnacks/"+id,values)
        .then(res => {
          console.log(res);
          navigate('/admin')
        })
        .catch(err => console.log(err));
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/proteinEnergySnacks/"+id)
    .then(res =>{
      setValues(res.data);
    })
    .catch(err => console.log(err));
},[])
  return (<>
  <div class="bg-blue-200 min-h-screen flex items-center">
   <div class="w-full">
     <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Edit Data</h2>
     <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleUpdate}>
         <div class="mb-5">
           <label htmlFor="name" class="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" name="name" placeholder="Product Name." class="border border-gray-300 shadow p-3 w-full rounded mb-2" value={values.name} onChange={e=> setValues({...values, name: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="price" class="block mb-2 font-bold text-gray-600">Price</label>
           <input type="text" name="price" placeholder="Product Price." class="border border-gray-300 shadow p-3 w-full rounded mb-2" value={values.price} onChange={e=> setValues({...values, price: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="image" class="block mb-2 font-bold text-gray-600">Image</label>
           <input type="text" name="price" placeholder="Product Image." class="border border-gray-300 shadow p-3 w-full rounded mb-2"value={values.image} onChange={e=> setValues({...values, image: e.target.value})}/>
         </div>

         <div class="mb-5">
         <label htmlFor="qty" class="block mb-2 font-bold text-gray-600">Qty</label>
           <input type="text" name="qty" placeholder="Product Qty." class="border border-gray-300 shadow p-3 w-full rounded mb-"value={values.qty} onChange={e=> setValues({...values, qty: e.target.value})}/>
         </div>

         <button class="block w-full bg-green-500 text-white font-bold p-4 rounded-lg mb-4">Submit</button>
          <Link to={'/admin'}> 
         <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Back</button>
          </Link>
       </form>
     </div>
   </div>
 </div>
  </>
  )
}
