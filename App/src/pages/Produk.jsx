import Card from "../components/Card";
import berry_shake from '../components/img/PROTEIN-SHAKE/berry-shake.png'
import cocoa_plant from '../components/img/PROTEIN-SHAKE/cocoa-plant.png'
import protein_shake_pack from '../components/img/PROTEIN-SHAKE/protein-shake-pack.png'
import tribe_chocCaramel from '../components/img/PROTEIN-SHAKE/tribe-chocCaramel.png'
import tribe_protein_shake from '../components/img/PROTEIN-SHAKE/tribe-protein-shake.jpg'
import vanilla_plant from '../components/img/PROTEIN-SHAKE/vanila-plant.png'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios"
import { useEffect, useState } from "react"
export default function Produk(){
    
    const [produks, setProduk] = useState([])
    const getProduks = async()=>{
        try{
            let response = await axios.get("http://localhost:3001/proteinEnergySnacks")
            setProduk(response.data);
            console.log(response.data);
        }catch(e){
            console.log(e.message);
        }
    }
    
    useEffect(()=>{
        getProduks();
    },[])
    
    return (
        <>
        <Header />
        <div class="min-h-[90vh] pt-10 pb-[7.5rem] bg-[#e0dedd]">
        <div class="max-w-[75rem] mx-auto md:flex flex-none">
        <Sidebar />
        <div class="md:w-3/4 w-full px-[0.625rem]">    
        <h1 class="md:mt-0 mt-10 mb-10 text-[#192b4c] md:text-[2.25rem] text-[2rem] leading-[2.25rem] font-bold 
                    text-left">PROTEIN ENERGY SNACKS</h1>

                    <div class="grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {produks.map((produk)=>{

                            return(
                                <Card key={produk.id} name={produk.name} qty={produk.qty} price={produk.price} image={produk.image} id={produk.id}></Card>
                            )
                        }
                        )}
                      </div>
        </div>
        </div>
        </div>
        </>
    );
}