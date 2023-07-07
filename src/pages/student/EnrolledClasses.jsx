import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const EnrolledClasses = () => {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure(`/payment-details/${user.email}`)
            .then(res => setData(res.data));
    }, []);
    return (
        <section className='min-h-screen flex flex-wrap gap-10 mx-40 my-20'>
            {
                data?.map(item =>
                    <div key={item._id} className="flex bg-base-100 shadow-2xl w-full h-[200px] rounded-lg">
                        <figure><img src={item?.lecture?.image} className="w-64 h-full rounded-s-lg" /></figure>
                        <div className="ms-10 flex-grow my-auto">
                            <h2 className="text-2xl font-bold">{item?.lecture?.name}</h2>
                            <p>Instructor: {item?.lecture?.instructor}</p>
                        </div>
                    </div>

                )
            }
        </section>
    );
};

export default EnrolledClasses;