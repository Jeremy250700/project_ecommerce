import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

export default function Read() {
  const [data, setData] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    axios.get("http://localhost:3001/proteinEnergySnacks/"+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
},[])
  return (
  <>
  <div className='flex w-full h-[100vh] justify-center items-center bg-slate-400'>
    <div className='w-1/2 border bg-white shadow px-5 pt-3 pb-5 rounded-md'>
      <h3>Detail Product</h3>
      <div className='mb-2'>
        <strong>Name: {data.name}</strong>
      </div>
      <div className='mb-2'>
        <strong>Image: {data.image}</strong>
      </div>
      <div className='mb-2'>
        <strong>Qty: {data.qty}</strong>
      </div>
      <div className='mb-3'>
        <strong>Price: {data.price}</strong>
      </div>
      <div className='flex-col'>
      <Link to={`/update/${id}`}>
      <button class="inline-block w-full bg-green-600 text-white font-bold p-4 rounded-lg my-4">Edit</button>
      </Link>
      <Link to={"/admin"}>
      <button class="w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Back</button>
      </Link>
      </div>
    </div>

  </div>
  </>
  )
}

