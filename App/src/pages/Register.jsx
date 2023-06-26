import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Register(){
    const [formRegisterData, setFormRegisterData] = useState({
        email:'',
        password:'',
        username:'',
        role:'customer',
    })

    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/register",formRegisterData)
            .then(res => {
              console.log(res);
              navigate('/login')
            })
            .catch(err => console.log(err));
      }

    return(<>
        <header className="bg-[#273c67] text-white">
            <h1 className="pt-10 pb-16 px-5 text-4xl text-center m-0 font-bold">
                REGISTER
            </h1>
        </header>
        <div className="pb-80 bg-[#e0dedd]">
            <div className="max-w-[75rem] mx-auto">
                <div className="w-1/3 pt-14 mx-auto">
                    <div className="p-5 rounded-md bg-white text-[#645957] font-bold">
                        <form onSubmit={handleSubmit}>
                            <h2 className="mb-5 text-3xl">
                                REGISTER PAGE
                            </h2>
                            <div className="mb-4">
                                <input type="text" 
                                className="w-full h-auto py-4 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base" 
                                placeholder="USERNAME"
                                name="username"
                                onChange={e=> setFormRegisterData({...formRegisterData, username: e.target.value})}/>
                            </div>
                            <div className="mb-4">
                                <input type="email" 
                                className="w-full h-auto py-4 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base" 
                                placeholder="EMAIL ADDRESS"
                                name="email"
                                onChange={e=> setFormRegisterData({...formRegisterData, email: e.target.value})}/>
                            </div>
                            <div className="mb-4">
                                <input type="password" 
                                className="w-full h-auto py-4 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base" 
                                placeholder="PASSWORD"
                                name="password"
                                onChange={e=> setFormRegisterData({...formRegisterData, password: e.target.value})}/>
                            </div>
                            <div className="mt-7 mb-4 flex justify-between">
                                <button type="submit" className="border-0 rounded-md bg-[#ffc600] text-[#192b4c] font-bold text-base text-center py-3 px-8">
                                    SUBMIT
                                </button>
                            </div>
                        </form> 
                    </div>
    
                </div>
            </div>
    
        </div>
        </>)
}