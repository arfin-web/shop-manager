import React from 'react'

const Statistics = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-4xl text-secondary">2.7K</h2>
                            <p className="leading-relaxed text-slate-300 text-lg">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-4xl text-secondary">1.8K</h2>
                            <p className="leading-relaxed text-slate-300 text-lg">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-4xl text-secondary">35</h2>
                            <p className="leading-relaxed text-slate-300 text-lg">Downloads</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-4xl text-secondary">4</h2>
                            <p className="leading-relaxed text-slate-300 text-lg">Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistics