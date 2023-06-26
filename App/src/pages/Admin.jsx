import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import AdminCard from '../admin_components/AdminCard'
import AdminSidebar from '../admin_components/AdminSidebar'

export default function Admin() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/proteinEnergySnacks')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  })
  return (
    <>
      <div class='min-h-[90vh] pt-10 pb-[7.5rem] bg-gradient-to-b from-[#eb5b52] to-[#f7a62e]'>
        <div class='max-w-[75rem] mx-auto md:flex flex-none'>
          <AdminSidebar />
          <div class='md:w-3/4 w-full px-[0.625rem]'>
            <div className='flex justify-between'>
              <h1 class='md:mt-0 mt-10 mb-10 text-white md:text-[2.25rem] text-[2rem] leading-[2.25rem] font-bold '>
                PRODUCT LIST
              </h1>
              <Link to='/create'>
                <button className='bg-green-700 text-white font-bold flex px-5 py-3 mb-10 rounded-md'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6 mx-2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 6h.008v.008H6V6z'
                    />
                  </svg>
                  <h2>ADD NEW PRODUCT</h2>
                </button>
              </Link>
            </div>

            <div class='grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              {data.map((d, i) => {
                return (
                  <AdminCard
                    key={i}
                    name={d.name}
                    qty={d.qty}
                    price={d.price}
                    image={d.image}
                    id={d.id}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className='flex flex-col justify-center items-center bg-slate-400 h-full py-4
    '
      >
        <h1 className='text-3xl font-bold mb-10'>List of Products</h1>
        <div className='w-3/4 rounded-md bg-white p-4'>
          <div className='flex justify-end'>
            <Link to='/create'>
              <button className='rounded-md bg-green-600 px-2 py-2 text-white'>
                Add +
              </button>
            </Link>
          </div>
          <div class='table w-full'>
            <div class='table-header-group ...'>
              <div class='table-row'>
                <div class='table-cell text-left px-4'>ID</div>
                <div class='table-cell text-left px-4'>NAME</div>
                <div class='table-cell text-left px-4'>PRICE</div>
                <div class='table-cell text-left px-4'>IMAGE</div>
                <div class='table-cell text-left px-4'>QTY</div>
                <div class='table-cell text-left px-4'>ACTION</div>
              </div>
            </div>
            <div class='table-row-group'>
              {data.map((d, i) => (
                <div class='table-row' key={i}>
                  <div class='table-cell px-4'>{d.id}</div>
                  <div class='table-cell px-4'>{d.name}</div>
                  <div class='table-cell px-4'>{d.price}</div>
                  <div class='table-cell px-4'>{d.image}</div>
                  <div class='table-cell px-4'>{d.qty}</div>
                  <div class='table-cell py-4'>
                    <Link to={`/read/${d.id}`}>
                      <button className='rounded-md bg-blue-400 px-2 py-2'>
                        Read
                      </button>{' '}
                    </Link>
                    <Link to={`/update/${d.id}`}>
                      <button className='rounded-md bg-blue-600 px-2 py-2 mx-2 text-white'>
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(d.id)}
                      className='rounded-md bg-red-600 px-2 py-2 text-white'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
