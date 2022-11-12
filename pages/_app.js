import '../styles/globals.css'
import Link from 'next/link'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { ImCart } from 'react-icons/im'
import {
  MdSpaceDashboard,
  MdShoppingCart,
  MdAddShoppingCart,
  MdSettingsInputSvideo,
  MdOutlineHelp
} from 'react-icons/md'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200">
          <div className='px-2.5 py-1 flex justify-between items-center h-14 bg-base-100 sticky top-0 z-10 lg:hidden'>
            <label htmlFor="my-drawer-2" className="drawer-button text-white text-4xl cursor-pointer"><HiBars3CenterLeft /></label>
            <Link href='/' className='text-primary text-3xl font-extrabold cursor-pointer'>Shop<span className='text-secondary'>Manager</span></Link>
            <label className="text-secondary text-4xl cursor-pointer"><ImCart /></label>
          </div>
          <div className='px-4 py-1 flex justify-between items-center h-20 bg-base-100 sticky top-0 z-10 desktop-head'>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#D926A9"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
            <label className="text-secondary text-4xl cursor-pointer"><ImCart /></label>
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
                  <img src="https://placeimg.com/192/192/people" />
                </div>
                <h1 className='text-3xl text-secondary font-bold'>Alexa Nt</h1>
              </div>
            </li>
            <li>
              <div className='text-2xl'><MdSpaceDashboard /> <Link href="/">Dashboard</Link></div>
            </li>
            <li>
              <div className='text-2xl'><MdShoppingCart /> <Link href="/products">Products</Link></div>
            </li>
            <li>
              <div className='text-2xl'><MdAddShoppingCart /> <Link href="/addproduct">Add Product</Link></div>
            </li>
            <li>
              <div className='text-2xl'><MdSettingsInputSvideo /> <Link href="/manage">Manage</Link></div>
            </li>
            <li>
              <div className='text-2xl'><MdOutlineHelp /> <Link href="/help">Help</Link></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MyApp