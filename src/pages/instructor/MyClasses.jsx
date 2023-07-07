import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from './../../Providers/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/classes-cart?email=${user.email}`)
            .then(res => setInstructorData(res.data))
    }, [])
    const enrolledStudents = instructorData.reduce((sum, item) => sum + item.enrolled, 0)
    console.log(instructorData);


    return (
        <section className='min-h-screen mx-40 my-10'>
            <h2>Total Enrolled Student's {enrolledStudents}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lecture Name</th>
                            <th>Enrolled Sturdent's</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorData?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.enrolled}</td>
                                    <td>{item.status}</td>
                                    <td><button className='btn btn-accent'>Update</button></td>
                                    <td>{item.feedback}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyClasses;