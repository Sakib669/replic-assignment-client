import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Banner3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/teachers/banner3')
            .then(res => setData(res.data))
    }, [])
    // console.log(data);
    return (
        <article className='my-10'>
            <h3 className='text-5xl font-bold text-center mt-40 text-primaryClr'>Popular Instructors</h3>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-40 md:mx-40 mx-5 mt-40'>
                {
                    data?.map(teacher =>
                        <div key={teacher._id} className="card relative bg-slate-200 shadow-2xl">
                            <div className="avatar absolute -top-1/3 left-10 bg-slate-200 rounded shadow-neutral-500 shadow-inner p-3">
                                <div className="w-24 rounded">
                                    <img src={teacher.image} />
                                </div>
                            </div>
                            <div className="card-body mt-14">
                                <h2 className="card-title">{teacher.name}</h2>
                            </div>
                        </div>
                    )
                }
            </section>
        </article>
    );
};

export default Banner3;