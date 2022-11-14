import React from 'react'

const Stat = () => {
    return (
        <>
            <div className='lg:flex'>
                <div className="stats stats-vertical lg:stats-horizontal shadow m-2 w-11/12 lg:w-1/2">

                    <div className="stat">
                        <div className="stat-title">Site Visits</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>

                <div className="stats stats-vertical lg:stats-horizontal bg-primary text-primary-content m-2 w-11/12 lg:w-1/2">

                    <div className="stat glass">
                        <div className="stat-title">Account balance</div>
                        <div className="stat-value">$89,400</div>
                        <div className="stat-actions">
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-secondary">Add Funds</label></div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Current balance</div>
                        <div className="stat-value">$89,400</div>
                        <div className="stat-actions">
                            <label htmlFor="my-modal-6" className="btn btn-sm m-1">Withdrawal</label>
                            <label htmlFor="my-modal-6" className="btn btn-sm m-1">deposit</label>
                        </div>
                    </div>

                </div>
            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stat