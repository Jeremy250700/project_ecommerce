import p1 from '../components/img/p1.jpg'
import p2 from '../components/img/p2.jpg'
import p3 from '../components/img/p3.jpg'
import detail from '../components/img/detail_produk.png'
import header_img from '../components/img/header_bg.jpg'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {add} from "../fetures/Product"


export default function Detail_Produk(){
    const { id } = useParams(); 
    // const[searchParams,setSearchParams] = useSearchParams();
    
    const[detailProduk, setDetailProduk]=useState({})

    const getDetail = async()=>{
        try{
            let response = await axios.get(`http://localhost:3001/proteinEnergySnacks/${id}`)
            setDetailProduk(response.data);
        }catch(e){
            console.log(e.message);
        }
    }

    useEffect(()=>{
        getDetail();
    },[])

    const [main_image, setMain_Image] = useState(detailProduk.image);

    function main_image_1(){
        setMain_Image(detailProduk.image);
    }
    function main_image_2(){
        setMain_Image(p2);
    }
    function main_image_3(){
        setMain_Image(p3);
    }

    return(
    <>
        <div>
        <header class="bg-gradient-to-t from-[#F6E6CE] to-[#F7F5E9] relative w-full text-center">
            <img src={header_img} alt="" class="absolute w-full h-full bg-repeat-x bg-bottom"/>

            <div class="pt-[8.75rem] relative px-5 pb-[3.75rem] font-bold">
                <h1 class="text-white text-[2.25rem] z-[3] leading-9 mt-4">{detailProduk.name}</h1>
                <p class="text-white text-[1.5rem] mb-11">{detailProduk.qty}</p>
                <a href="index.html" class="inline-block p-3 rounded-[0.3125rem] text-[1rem] leading-4 text-center no-underline bg-white bg-opacity-30 text-white" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-4 align-text-bottom inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                      </svg>
                      <Link to={"/"}>  
                    <span>BACK TO SHOP</span>
                      </Link>
                </a>
            </div>
        </header>
        <div class="bg-[#e0dedd] flex flex-col justify-center md:p-10 px-0 py-10">

            <div class="md:flex flex-none bg-white w-full justify-center rounded-md md:p-10 p-3">
                <div class="flex md:w-1/2 w-full flex-col">
                    <img src={main_image} alt="" class="w-full rounded-md" id="gambar-produk"/>
                    <div class="flex w-full items-center mt-5 md:justify-start justify-between">
                        <img src={detailProduk.image} alt="" class="w-1/5 rounded-md" onclick="gambar1()" onClick={main_image_1}/>
                        <img src={p2} alt="" class="w-1/5 mx-5 rounded-md"onclick="gambar2()"onClick={main_image_2}/>
                        <img src={p3} alt="" class="w-1/5 rounded-md"onclick="gambar3()"onClick={main_image_3}/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full md:mt-0 mt-10 md:pl-5 text-[#645957]">
                    <h3 class="text-[1.5rem] font-bold mb-3">{detailProduk.name}</h3>
                    <h3 class="text-[1.5rem] font-bold mb-3">{detailProduk.qty}</h3>
                    <h3 class="mb-5 text-[2.25rem] font-bold">{detailProduk.price}</h3>

                    <p class="font-semibold mb-3">
                        The Nut Butter Triple Decker is the UK's best-tasting plant protein bar. It has three layers; crunchy protein granola base, a thick peanut butter filling and a vegan chocolate topping. Discover the Force of Nature.
                    </p>

                    <ul class="m-0 p-0 list-none font-bold">
                        <li class="text-[1rem] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              8g Plant Protein.
                        </li>
                        <li class="text-[1rem] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              50% Less Sugar than competitors.
                        </li>
                        <li class="text-[1rem] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              10 Vitamins and Minerals for energy release.
                        </li>
                        <li class="text-[1rem] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              Vegan + Gluten Free.
                        </li>
                        <li class="text-[1rem] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              Natural Plant Energy.
                        </li>
                    </ul>
                    <button class="mt-10 font-bold bg-[#ffc600] p-4 text-center rounded-md text-[#192b4c] w-full md:w-2/3">
                        ADD TO CART</button>
                </div>

            </div>

            <div class="my-10 rounded-md bg-white md:p-10 px-2 py-5 text-[#645957]">
                <h3 class="text-[2.25rem] mb-10 leading-4 text-center font-bold">IN YOUR PACK</h3>

                <div class="flex bg-[#f2f2f2] rounded-md justify-items-end">
                    <div class="flex md:w-1/2 w-2/3">
                        <div class="bg-gradient-to-t from-[#F6E6CE] to-[#F7F5E9] rounded-md md:w-1/5 w-1/2 flex justify-center">
                            <img src={detail} alt="" class="m-3"/>
                        </div>
                        <div class="md:w-2/3 w-1/2 md:p-5 pl-5 py-3">
                            <div class="font-bold md:text-base text-xs">
                                White Choc Blondie Triple Decker
                            </div>
                            <div class=" md:text-base text-xs">
                                GF, Ve
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 w-1/3 text-end p-5 md:text-4xl text-lg font-bold">
                            x12
                    </div>
                </div>

                <div class="md:px-3 px-0 py-5 md:flex flex-none bg-[#f2f2f2] rounded-md my-3 ">
                    <div class="md:w-1/2 w-full">
                        <p class="font-semibold mb-3.5">
                            The White Chocolate Triple Decker Blondie is the UK's best-tasting plant energy bar. It has three layers; a crunchy protein granola base, a thick peanut butter filling, and a white chocolate vegan topping. Discover the Force of Nature.
                        </p>
                        <h5 class="font-bold text-xl mb-5">
                            KEY NUTRITION PER SERVING
                        </h5>
                        <div class="w-1/2 text-white font-bold ml-2 my-10">
                            <div class="my-2 px-2 bg-[#d64a2f]">Protein: 10g</div>
                            <div class="my-2 px-2 bg-[#e79635]">Carbohydrates: 12g</div>
                            <div class="my-2 px-2 bg-[#ebc456]">Fats: 15g</div>
                        </div>

                        <div class="my-5">
                            <h5 class="font-bold text-xl mb-3.5">
                                INGREDIENTS
                            </h5>
                            <ul class="m-0 p-0 list-none font-semibold">
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      PEANUT BUTTER
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      White OAT Chocolate
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      PEANUTS
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      SOY Protein Crispies
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Buckwheat
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Chicory Fibre
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Coconut Sugar
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Cocoa Butter
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Sunflower Seeds
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Date Syrup
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      ALMONDS
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Cocoa Powder
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Natural Chocolate Flavouring
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Emulsifier: Rapeseed Lecithin
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Cacao Nibs
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Chia Seeds
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Sunflower Oil
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Vegetable Fibres
                                </li>
                                <li class="pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#28ABA4] inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                      </svg>
                                      Sea Salt.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="md:w-1/2">
                        <div class="bg-[#e0dedd] p-5 mb-4 rounded-md text-[#645957]">
                            <h5 class="font-bold text-xl mb-4">
                                KEY BENEFITS
                            </h5>
                            <ul class="m-0 p-0 list-none font-bold">
                                <li class="text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                      Great Tasting.
                                </li>
                                <li class="text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                      10g Plant Protein.
                                </li>
                                <li class="text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                      Vegan + Gluten Free.
                                </li>
                                <li class="text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                      Natural Plant Energy.
                                </li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h5 class="font-bold text-xl mb-4">
                                NUTRITIONAL INFORMATION
                            </h5>
                            <table class="w-full border-collapse text-left text-sm">
                                <thead>
                                    <tr>
                                        <th class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid w-2/3">Nutrition</th>
                                        <th class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">per product</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Energy (kJ)</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">947</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Energy (kcal)</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">228</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Fat</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">15g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">of which Saturates</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">4.4g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Carbohydrate</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">12g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">of which Sugars</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">6.9g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Fibre</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">4.2g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Protein</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">10g</td>
                                    </tr>
                                    <tr>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid ">Salt</td>
                                        <td class="py-[0.125rem] border-b-[0.0625rem] border-[#645957] border-solid">0.07g</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </div>
    </>
    );
}