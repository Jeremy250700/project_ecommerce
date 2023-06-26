import header_img from './img/produk-banner.avif'
export default function Header(){
    return (
        <>
        <div class="py-[3.75rem] bg-no-repeat bg-center bg-cover text-center" style={{ backgroundImage: `url(${header_img})` }}>
        <h1 class="m-0 text-white text-[5rem] leading-[5rem] font-bold">
            TRIBE SHOP
        </h1>
    </div>
        </>
    );

}