import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);

    const onSubmit = (data) => {
        // Logic for creating a class
        setDisabled(true);
        const { name, image, instructor, availableSeats, price, email } = data;
        const lectureData = {
            email,
            name,
            image,
            instructor,
            availableSeats: parseInt(availableSeats),
            price: parseInt(price),
            status: 'pending',
            enrolled: 0
        };
        axios.post('http://localhost:5000/classes', lectureData)
        .then(res => {
            console.log(res);
            if(res.data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Lecture Added',
                    footer: 'admin will approve this lecture',
                    text: 'Lecture will be pending',
                  })
                setDisabled(false);
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: err.message
              })
        })
    };


    return (
        <section className='mx-40 min-h-screen my-20'>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow-md">
                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="name">Class Name</label>
                    <input {...register('name', { required: true })} className="w-full px-4 py-2 border rounded" />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="image">Class Image</label>
                    <input {...register('image', { required: true })} className="w-full px-4 py-2 border rounded" />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="instructor">Instructor</label>
                    <input value={user?.displayName} {...register('instructor', )} className="w-full px-4 py-2 border rounded" />
                </div>

                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="instructor">Instructor</label>
                    <input value={user?.email} {...register('email', )} className="w-full px-4 py-2 border rounded" />
                </div>

                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="availableSeats">Available Seats</label>
                    <input type="number" {...register('availableSeats', { required: true })} className="w-full px-4 py-2 border rounded" />
                    {errors.availableSeats && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4 shadow-lg">
                    <label className="block mb-2 font-bold" htmlFor="price">Price</label>
                    <input type="number" step="0.01" {...register('price', { required: true })} className="w-full px-4 py-2 border rounded" />
                    {errors.price && <span className="text-red-500">This field is required</span>}
                </div>

                <button type="submit" disabled={disabled} className="px-4 py-2 btn btn-info">Add</button>
            </form>
        </section>
    );
};

export default AddClass;