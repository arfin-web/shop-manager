import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div className='mx-4 my-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <figure className='glass p-2 rounded-xl'>
                    <img src='/add.svg' className='h-full rounded-lg' alt='addProduct' />
                </figure>
                <div className=''>
                    <h1 className='text-4xl text-primary font-bold mb-10'>Add New <span className='text-secondary'>Product</span></h1>
                    <form className='flex flex-col'>
                        <input type="text" placeholder="Product Name" className="input input-bordered input-primary w-full mb-8" />
                        <select className="select select-primary w-full mb-4">
                            <option className='text-2xl' disabled selected>Select Category</option>
                            <option className='text-2xl'>men's clothing</option>
                            <option className='text-2xl'>jewelery</option>
                            <option className='text-2xl'>electronics</option>
                            <option className='text-2xl'>women's clothing</option>
                        </select>
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full mb-8" />
                        <input type="number" placeholder="Set Price" className="input input-bordered input-primary w-full mb-8" />
                        <button className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct