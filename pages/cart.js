import React, { useRef } from "react";
import { useCart } from "react-use-cart";
import { useReactToPrint } from 'react-to-print';
import Head from "next/head";
import Link from "next/link";

function Cart() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print Success')
    })

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    if (isEmpty) return <h1 className="text-3xl font-semibold text-center my-4">Your cart is empty</h1>;

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
            <div className="container mx-auto p-4">
                <div className="overflow-x-auto w-full">
                    <h1 className="text-3xl text-primary font-bold">Cart <span className="text-secondary">({totalUniqueItems})</span></h1>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-lg text-center">Items</th>
                                <th className="text-lg text-center">Quantity</th>
                                <th className="text-lg">Price</th>
                                <th className="text-lg">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <div className="font-bold text-lg">{item.title}</div>                                                    </div>
                                                </div>
                                            </td>
                                            <td className="flex justify-around align-center">
                                                <button className="btn btn-square" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M0 12v1h23v-1h-23z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
                                                </button>
                                                <button className="btn btn-circle btn-outline text-lg">
                                                    {item.quantity}
                                                </button>
                                                <button className="btn btn-square" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
                                                </button>
                                            </td>
                                            <td>
                                                <h4 className="text-lg">{item.price}</h4>
                                            </td>
                                            <td>
                                                <button onClick={() => removeItem(item.id)} className="btn btn-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex flex-col">
                    <h1 className="text-3xl text-primary font-bold text-center my-4">Total <span className="text-secondary">{cartTotal}</span></h1>
                </div>
            </div>

            <div ref={componentRef} className="overflow-x-hidden px-6">
                <h1 className="text-3xl text-center font-bold my-4">Shop Manager</h1>
                <h1 className="text-3xl font-bold my-4">INVOICE</h1>
                <h1 className="text-2xl font-bold my-4">Billed To</h1>
                <div className="form-control mb-4">
                    <label className="input-group">
                        <span className="text-md font-bold">Name</span>
                        <input type="text" placeholder="Client Name" className="input input-ghost text-md" />
                    </label>
                </div>
                <div className="form-control mb-4">
                    <label className="input-group">
                        <span className="text-md font-bold">Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-ghost text-md" />
                    </label>
                </div>
                <div className="form-control mb-4">
                    <label className="input-group">
                        <span className="text-md font-bold">Address</span>
                        <input type="text" placeholder="Street No 1, Uttara, Dhaka" className="input input-ghost text-md" />
                    </label>
                </div>
                <div className="form-control mb-8">
                    <label className="input-group">
                        <span className="text-md font-bold">Zip Code</span>
                        <input type="text" placeholder="1230" className="input input-ghost text-md" />
                    </label>
                </div>
                <h1 className="text-3xl font-bold my-4">Total Item: ({totalUniqueItems})</h1>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <th>{product.title}</th>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <th>
                                <td>
                                    <h3 className="text-lg font-bold">Total:</h3>
                                </td>
                            </th>
                            <td></td>
                            <td>
                                <h3 className="text-lg font-bold">$ {cartTotal}</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-10">
                    <h3 className="text-xl font-bold">Shop Manger</h3>
                    <h3 className="text-base font-bold">Sector 10, Uttara, Dhaka</h3>
                </div>
            </div>

            <div className="w-full flex flex-col px-4 my-8">
                <button onClick={handlePrint} className="btn">Generate Invoice</button>
            </div>
        </>
    );
}

export default Cart