import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import Head from 'next/head';
import Link from 'next/link';

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const { addItem, totalUniqueItems } = useCart();

    return (
        <>
            <Head>
                <title>Shop Manager</title>
                <meta name="description" content="Shop Manager" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='px-2.5 py-1 flex justify-between items-center h-14 bg-base-100 sticky top-0 z-20'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-36" />
                        <button className="btn btn-square glass">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#D926A9"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Link href='/cart'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
                        <span className="badge badge-md indicator-item">{totalUniqueItems}</span>
                    </div>
                </label>

            </div>
            <h1 className='text-4xl text-primary text-center font-bold mt-8 mb-10'>All <span className='text-secondary'>Products</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4">
                {
                    items.map(item => {
                        return (
                            <>
                                <div className="card w-72 bg-base-100 shadow-xl glass" key={item.id}>
                                    <figure><img src={item.image} className='w-80 h-80' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">{item.title}</h2>
                                        <h2 className="card-title text-xl">{item.category}</h2>
                                        <div className="card-actions justify-between align-center mt-2.5">
                                            <h2 className="card-title text-3xl"><span className='text-secondary font-extrabold'>$</span> {item.price}</h2>
                                            <button onClick={() => addItem(item)} className="btn btn-primary">Append</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products