import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    const [allLectures, setAllLectures] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/all-products-cart-data')
            .then(res => setAllLectures(res.data))
    }, [])



    return (
        <section>
            <h3 className="text-2xl font-bold mb-5 text-center">Order List</h3>
            <div className='min-h-screen flex  flex-wrap gap-10 mx-40 my-20'>
                <div className="w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>User Email</th>
                                <th>Name</th>
                                <th>Material</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allLectures.map(
                                    item =>
                                        <tr key={item._id}>
                                            <th>{item.email}</th>
                                            <td>{item.lecture.type}</td>
                                            <td>{item.lecture.material}</td>
                                            <td>{item.lecture.price}</td>
                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default ManageProducts;