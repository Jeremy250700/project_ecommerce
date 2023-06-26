import axios from "axios"
import { useEffect, useState } from "react"

export default function CobaAxios(props){
    const [produks, setProduk] = useState([])
    const getProduks = async()=>{
        try{
            let response = await axios.get("http://localhost:3005/proteinEnergySnacks")
            setProduk(response.data);
            console.log(response.data);
        }catch(e){
            console.log(e.message);
        }
    }
    
    useEffect(()=>{
        getProduks();
    },[])
    return(
        <>
            <div>
                {
                    produks.map(produk=>{
                        return(
                            <div key={produk.id}>
                            <h1>{produk.title}</h1>
                            <h1>{produk.qty}</h1>
                            <h1>{produk.price}</h1>
                            <h1>{produk.image}</h1>
                            <h1>{produk.button}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}