import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        const x = axiosSecure.get(`http://localhost:5000/all-users-data`)
            .then(res => setAllUsers(res.data))
    }, [])

    const handleRoleUpdate = (role, email) => {
        console.log(role, email);
        axios.patch(`http://localhost:5000/all-users-data/?email=${email}&role=${role}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const x = axiosSecure.get(`http://localhost:5000/all-users-data`)
                        .then(res => setAllUsers(res.data))
                    Swal.fire('Role updated')
                }
            })
    }

    return (
        <section className='mx-20 min-h-screen'>
            <h2 className='text-3xl text-center font-extrabold mb-10'>Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map(item =>
                                <tr>
                                    <th>{item.name}</th>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td><button className='btn btn-secondary' disabled={item.role === 'admin'} onClick={() => handleRoleUpdate('admin', item.email)}>Make Admin</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageUsers;