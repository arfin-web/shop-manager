import React, { useEffect, useState } from 'react'

const Manage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <h1 className='text-4xl text-primary text-center font-bold mt-8 mb-10'>Manage <span className='text-secondary'>Product</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4">
                {
                    items.map(item => {
                        return (
                            <>
                                <div className="card w-80 bg-base-100 shadow-xl" key={item.id}>
                                    <figure><img src={item.image} className='w-80 h-80' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl text-white">{item.title}</h2>
                                        <h2 className="card-title text-xl text-slate-300">{item.category}</h2>
                                        <h2 className="card-title text-3xl text-white"><span className='text-secondary font-extrabold'>$</span> {item.price}</h2>
                                        <div className="card-actions justify-evenly align-center mt-2.5">
                                            <button className="btn btn-secondary">Delete</button>
                                            <button className="btn btn-primary">Update</button>
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

export default Manage