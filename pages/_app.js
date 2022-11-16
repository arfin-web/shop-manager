import '../styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Link from 'next/link'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import {
  MdSpaceDashboard,
  MdShoppingCart,
  MdAddShoppingCart,
  MdSettingsInputSvideo,
  MdOutlineHelp
} from 'react-icons/md'
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <>
      <CartProvider>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-base-200">
            <div className='px-2.5 py-1 flex justify-between items-center h-14 bg-base-100 sticky top-0 z-10'>
              <label htmlFor="my-drawer-2" className="drawer-button text-4xl cursor-pointer lg:invisible"><HiBars3CenterLeft /></label>
              <div className="form-control invisible">
                <div className="input-group">
                  <input type="text" placeholder="Search…" className="input input-bordered w-28" />
                  <button className="btn btn-square glass">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#D926A9"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>
              <select data-choose-theme className="select select-bordered select-sm font-bold w-32">
                <option className='text-lg font-bold' value="dark" selected>Dark Mode</option>
                <option className='text-lg font-bold' value="light">Light Mode</option>
                <option className='text-lg font-bold' value="retro">Retro Mode</option>
                <option className='text-lg font-bold' value="cyberpunk">Cyberpunk Mode</option>
                <option className='text-lg font-bold' value="valentine">Valentine Mode</option>
                <option className='text-lg font-bold' value="aqua">Aqua Mode</option>
                <option className='text-lg font-bold' value="luxury">Luxury Mode</option>
                <option className='text-lg font-bold' value="coffee">Coffee Mode</option>
              </select>
            </div>
            <Component {...pageProps} />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 bg-base-100 text-base-content">
              <li>
                <Link href='/' className='text-3xl text-primary font-extrabold cursor-pointer mb-8'>Shop<span className='text-secondary'>Manager</span></Link>
              </li>
              <li>
                <div className="avatar mb-4 flex flex-col justify-center align-center">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Link href='/profile'><img src="https://placeimg.com/192/192/people" /></Link>
                  </div>
                  <h1 className='text-3xl text-secondary font-bold'>
                    <Link href='/profile'>Alexa Nt</Link>
                  </h1>
                </div>
              </li>
              <li className='hover:glass rounded-full mb-2.5'>
                <div className='text-2xl hover:text-primary hover:font-bold'><MdSpaceDashboard /> <Link href="/dashboard">Dashboard</Link></div>
              </li>
              <li className='hover:glass rounded-full mb-2.5'>
                <div className='text-2xl hover:text-primary hover:font-bold'><MdShoppingCart /> <Link href="/products">Products</Link></div>
              </li>
              <li className='hover:glass rounded-full mb-2.5'>
                <div className='text-2xl hover:text-primary hover:font-bold'><MdAddShoppingCart /> <Link href="/addproduct">Add Product</Link></div>
              </li>
              <li className='hover:glass rounded-full mb-2.5'>
                <div className='text-2xl hover:text-primary hover:font-bold'><MdSettingsInputSvideo /> <Link href="/manage">Manage</Link></div>
              </li>
              <li className='hover:glass rounded-full mb-2.5'>
                <div className='text-2xl hover:text-primary hover:font-bold'><MdOutlineHelp /> <Link href="/help">Help</Link></div>
              </li>
            </ul>
          </div>
        </div>
      </CartProvider>
    </>
  )
}

export default MyApp