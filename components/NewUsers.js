import React from 'react'

const users = [
    {
        id: 1,
        image: 'https://placeimg.com/192/192/people',
        name: 'Yancy Tear',
        country: 'Brazil',
        company: 'Wyman-Ledner',
        designation: 'Cashier',
        shop: 'MS Store'
    },
    {
        id: 2,
        image: 'https://placeimg.com/192/192/people',
        name: 'Yammy Tr',
        country: 'Argentina',
        company: 'Wyman-Ledner',
        designation: 'General Manager',
        shop: 'Family Needs'
    },
    {
        id: 3,
        image: 'https://placeimg.com/192/192/people',
        name: 'Nany Pl',
        country: 'USA',
        company: 'Wyman-Ledner',
        designation: 'Manager',
        shop: 'Shopno'
    },
]

const NewUsers = () => {
    return (
        <>
            <div className='container mx-auto p-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th className='text-lg'></th>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Job</th>
                                <th className='text-lg'>Shop Name</th>
                                <th className='text-lg'>More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    return (
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <div className="avatar">
                                                                <div className="rounded-full">
                                                                    <img src={user.image} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user.name}</div>
                                                        <div className="text-sm opacity-50">{user.country}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {user.company}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{user.designation}</span>
                                            </td>
                                            <td>{user.shop}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs glass">details</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default NewUsers