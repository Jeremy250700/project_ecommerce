export default function Footer(){
    return(<>
    <footer className="mt-12 pt-10 pb-1 bg-[#28aba4] relative text-white font-bold">
        <img src="https://d32vkgmd6unjtd.cloudfront.net/static/images/backgrounds/waves.png" alt="" className="absolute -top-40 left-0 w-full h-40 bg-repeat-x bg-bottom bg-contain"/>
        <div className="max-w-[75rem] mx-auto flex">
            <div className="w-1/4 px-4">
                <div className="flex flex-col w-full m-0 p-0 justify-center">
                    <p className="m-0 text-xl font-bold">
                    NEWSLETTER
                    </p>
                    <input type="email" className="w-full h-auto py-2 mt-5 px-5 border-none rounded-md bg-[#f2f2f2] text-black text-base" placeholder="EMAIL ADDRESS"/>
                    <button className="border-0 rounded-md bg-[#ffc600] text-[#192b4c] font-bold text-base text-center py-3 px-8 mt-7">
                                SUBSCRIBE
                    </button>
                </div>
            </div>

            <div className="w-1/4 px-4">
                <div className="flex flex-col w-full m-0 p-0 justify-center">
                    <p className="m-0 text-xl font-bold">
                    USEFUL LINKS
                    </p>

                    <ul className="mb-8 list-none mt-5 p-0 m-0">
                        <li className="mb-3">
                            <p className="inline-block text-white">TRIBE Freedom Foundation</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">Refer a friend</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">Blog</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">Terms</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">Privacy</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">FAQ</p>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="w-1/4 px-4">
                <div className="flex flex-col w-full m-0 p-0 justify-center">
                    <p className="m-0 text-xl font-bold">
                    CONTACT DETAILS
                    </p>
                    <ul className="mb-8 list-none mt-5 p-0 m-0">
                        <li className="mb-3">
                            <p className="inline-block text-white">hello@weartribe.co</p>
                        </li>
                        <li className="mb-3">
                            <p className="inline-block text-white">Become a Stocklist</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-1/4 px-4">
                <div className="flex flex-col w-full m-0 p-0 justify-center">
                    <p className="m-0 text-xl font-bold">
                    CONNECT WITH US
                    </p>
                    <ul className="mb-8 list-none mt-5 p-0 m-0 flex justify-start">
                        <li className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                        </li>
                        <li className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                             <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                        </svg>

                        </li>

                        <li className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                            <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
                        </svg>
                        </li>

                        <li className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                        </svg>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
    </>)
}