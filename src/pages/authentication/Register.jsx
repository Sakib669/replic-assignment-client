import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authImg from '../../assets/images/authentication.gif'
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { googleLogIn, createUser, updateUserProfile } = useContext(AuthContext);
    const navigete = useNavigate();
    const onSubmit = data => {
        const { name, photoURL, email, password, matchPass } = data;

        if (password !== matchPass) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Both passord did not matched!'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(name, photoURL)
                    .then(result => {
                        const savedUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student' , image: loggedUser.photoURL}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Register Successfull',
                                })
                                navigete('/');
                            })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.message
                        })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(loggedUser);
                        Swal.fire({
                            icon: 'success',
                            title: 'Register Successfull',
                        })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    }

    return (
        <section className="min-h-screen py-20">
            <div className="hero min-h-screen bg-base-200 items-center">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={authImg} alt="" />
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="enter your name" className="input input-bordered"
                                    {...register("name", {
                                        required: true,
                                    })} />
                                {errors.name && <p className="text-red-500">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered"
                                    {...register("photoURL", {
                                        required: true
                                    })} />
                                {errors.photoURL && <p className="text-red-500">PhotoURL is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} />
                                {errors.email && <p className="text-red-500">Email is required and must be valid</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered"
                                    {...register("matchPass", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} />
                                {errors.matchPass && <p className="text-red-500">{errors.matchPass.message}</p>}
                            </div>
                            <p>Already User ? <Link to='/login' className="underline text-info">Login Now</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" value='Register' type="submit" />
                            </div>
                        </div>
                        <div className="divider"></div>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-circle btn-error mx-auto mb-5"><FaGoogle /></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;