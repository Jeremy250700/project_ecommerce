import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../fetures/AuthSlice'
import { Link } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()

  const [formLoginData, setFormLoginData] = useState({
    email: '',
    password: '',
  })

  const setLoginValue = (event) =>
    setFormLoginData({
      ...formLoginData,
      [event.target.name]: event.target.value,
    })

  const handleLogin = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3002/login', formLoginData)
      .then((res) => {
        const { accessToken, user } = res.data
        dispatch(setToken(accessToken))
        dispatch(setUser(user))
        console.log('sukses')
      })
      .catch((err) => {
        alert('error')
        console.error(err)
        console.error(err.response)
      })
  }

  return (
    <>
      <header className='bg-[#273c67] text-white'>
        <h1 className='pt-10 pb-16 px-5 text-4xl text-center m-0 font-bold'>
          LOGIN
        </h1>
      </header>
      <div className='pb-80 bg-[#e0dedd]'>
        <div className='max-w-[75rem] mx-auto'>
          <div className=' w-1/3 mx-auto pt-14'>
            <div className='p-5 rounded-md bg-white text-[#645957] font-bold'>
              <form onSubmit={handleLogin}>
                <h2 className='mb-5 text-3xl'>LOGIN PAGE</h2>
                <div className='mb-4'>
                  <input
                    type='email'
                    className='w-full h-auto py-4 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base'
                    placeholder='EMAIL ADDRESS'
                    name='email'
                    value={formLoginData.email}
                    onChange={setLoginValue}
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='password'
                    className='w-full h-auto py-4 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base'
                    placeholder='PASSWORD'
                    name='password'
                    value={formLoginData.password}
                    onChange={setLoginValue}
                  />
                </div>
                <div className='mt-7 mb-4 flex justify-between'>
                  <button
                    type='submit'
                    className='border-0 rounded-md bg-[#ffc600] text-[#192b4c] font-bold text-base text-center py-3 px-8'
                  >
                    SING IN
                  </button>

                  <Link to={'/register'}>
                    <button className='border-0 rounded-md bg-lime-500 text-[#192b4c] font-bold text-base text-center py-3 px-8'>
                      REGISTER
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
