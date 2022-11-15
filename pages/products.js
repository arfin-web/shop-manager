import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import Head from 'next/head';

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const { addItem } = useCart();

    return (
        <>
            <Head>
                <title>Shop Manager</title>
                <meta name="description" content="Shop Manager" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className='text-4xl text-primary text-center font-bold mt-8 mb-10'>All <span className='text-secondary'>Products</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4">
                {
                    items.map(item => {
                        return (
                            <>
                                <div className="card w-72 bg-base-100 shadow-xl glass" key={item.id}>
                                    <figure><img src={item.image} className='w-80 h-80' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl text-white">{item.title}</h2>
                                        <h2 className="card-title text-xl text-slate-300">{item.category}</h2>
                                        <div className="card-actions justify-between align-center mt-2.5">
                                            <h2 className="card-title text-3xl text-white"><span className='text-secondary font-extrabold'>$</span> {item.price}</h2>
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