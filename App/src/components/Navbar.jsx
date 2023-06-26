import logo from './img/tribe_logo.png'
import shipping from './img/free-delivery.avif'
import star from './img/star.avif'
import trophy from './img/trophy.avif'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAuthData } from '../fetures/AuthSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)
  const handleLogout = () => {
    dispatch(resetAuthData())
    navigate('/')
  }
  return (
    <>
      <header>
        <div class='px-5 bg-[#192b4c]'>
          <nav class='flex justify-between items-center  text-white text-lg font-sans font-bold'>
            <div class='flex items-center p-auto'>
              <a href='' class='w-20 leading-10'>
                <img src={logo} alt='' />
              </a>
              <ul class='flex mx-2 p-1 items-center'>
                {user.role === 'admin' ? (
                  <li class='flex rounded-md mx-1 hover:bg-[#264172]'>
                    <Link to={'/admin'}>
                      <a href='' class='px-3 leading-10'>
                        ADMIN
                      </a>
                    </Link>
                  </li>
                ) : (
                  <div></div>
                )}
                <li class='rounded-md  mx-1 hover:bg-[#264172] inline-flex items-center'>
                  <a
                    href=''
                    class='px-3 leading-10'
                    id='dropdownHoverButton'
                    data-dropdown-toggle='dropdownHover'
                    data-dropdown-trigger='hover'
                  >
                    COMMUNITY
                  </a>
                  <div id='dropdownHover' class='z-10 hidden bg-[#192b4c] px-2'>
                    <ul
                      class='py-2 text-lg text-white dark:text-gray-200'
                      aria-labelledby='dropdownHoverButton'
                    >
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          EVENTS
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          TEAM TRIBE
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          BLOG
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class='flex  rounded-md  mx-1 hover:bg-[#264172]'>
                  <Link to={'/'}>
                    <a
                      href=''
                      class='px-3 leading-10'
                      id='dropdownHoverShopButton'
                      data-dropdown-toggle='dropdownHoverShop'
                      data-dropdown-trigger='hover'
                    >
                      SHOP
                    </a>
                  </Link>

                  <div
                    id='dropdownHoverShop'
                    class='z-10 hidden bg-[#192b4c] px-2'
                  >
                    <ul
                      class='py-2 text-lg text-white'
                      aria-labelledby='dropdownHoverShopButton'
                    >
                      <li>
                        <a
                          href='detail-produk.html'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          NUTRITION
                        </a>
                      </li>
                      s
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          BUILD YOUR OWN PACK
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          BUNDLES
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='block px-4 py-2 hover:bg-[#264172] rounded-md'
                        >
                          MERCHANDISE
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class='flex rounded-md  mx-1 hover:bg-[#264172]'>
                  <a
                    href=''
                    class='px-3 leading-10 md:leading-none lg:leading-10'
                  >
                    DISCOVER BY RANGE
                  </a>
                </li>
                <li class='flex  rounded-md  mx-1 hover:bg-[#264172]'>
                  <a href='' class='px-3 leading-10'>
                    TRAINING
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul class='flex p-3'>
                <Link to={'/cart'}>
                  <li class='rounded-md  p-2 mx-1 hover:bg-[#264172]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      class='w-6 stroke-2 leading-10'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                      />
                    </svg>
                  </li>
                </Link>
                {user.id === '' ? (
                  <Link to={'/login'}>
                    <li class='flex rounded-md  mx-1 hover:bg-[#264172]'>
                      <a href='' class='px-3 leading-10 '>
                        LOGIN
                      </a>
                    </li>
                  </Link>
                ) : (
                  <li class='flex rounded-md  mx-1 hover:bg-[#264172]'>
                    <a href='' class='px-3 leading-10 ' onClick={handleLogout}>
                      LOGOUT
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div class='bg-[#FDF2E3] font-sans font-bold flex p-3 justify-around items-center px-5'>
        <div class='flex items-center'>
          <img src={shipping} alt='' class='w-8 mr-3' />
          <p class='text-sm'>Free shipping over £30</p>
        </div>
        <div class='items-center md:flex hidden'>
          <p class='text-lg mr-3'>Excellent</p>
          <img src={star} alt='' class='w-24' />
        </div>
        <div class='items-center md:flex hidden'>
          <img src={trophy} alt='' class='w-8 mr-3' />
          <div class='text-sm max-w-[200px] text-center'>
            The UK's No. 1 Plant Performance Brand
          </div>
        </div>
      </div>
    </>
  )
}
