import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, watch, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");


    const handleSignup = (data) => {
        console.log(data)
    }

    const handleGoogle = () => {

    }

    return (
        <div className='my-32 mx-auto max-w-96 flex justify-center items-center flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignup)} className='flex flex-col bg-white shadow-2xl px-12 py-6 rounded-xl min-w-[500px]'>

                <div className="form-control flex flex-col">
                    <label className="label ">
                        <span className="label-text text-[#051a45]">Name</span>
                    </label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text" placeholder="Name" className="input input-bordered" />
                    {
                        errors.email && <span className='text-red-500'>{errors.email.message}</span>
                    }
                </div>


                <div className="form-control flex flex-col">
                    <label className="label ">
                        <span className="label-text text-[#051a45]">Email</span>
                    </label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email" placeholder="Email" className="input input-bordered" />
                    {
                        errors.email && <span className='text-red-500'>{errors.email.message}</span>
                    }
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#051a45]">Password</span>
                    </label>
                    <input
                        {...register("password", {
                            required: "Password is Required",
                            minLength: {
                                value: 6,
                                message: "Password must have at least 6 characters"
                            },
                            maxLength: {
                                value: 15,
                                message: "Password must not exceed 15 characters"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                                message: "Must contain at least one uppercase letter, one lowercase letter, and one number"
                            }
                        })}
                        type="password" placeholder="Password" className="input input-bordered" />
                    {
                        errors.password && <span className='text-red-500'>{errors.password.message}</span>
                    }
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#051a45]">Confirm Password</span>
                    </label>
                    <input {...register("confirmPassword", {
                        validate: value => value === watch('password') || "Passwords do not match"
                    })}
                        type="password" placeholder="Confirm Password" className="input input-bordered" />
                    {
                        errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>
                    }
                </div>


                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Sign Up</button>
                </div>

                {/* Or logi nwith google draw a horizontal line with or*/}
                <div className="flex items-center mt-4">
                    <hr className="w-full border-gray-300" />
                    <label className="label text-sm text-gray-500">Or</label>
                    <hr className="w-full border-gray-300" />
                </div>
                <div className="form-control mt-4">
                    <button className="btn btn-primary" onClick={handleGoogle}>Signup with Google</button>
                </div>
                {/* Not registered yet? */}
                <div className="form-control mt-4 mb-2">

                    <p className="label-text text-[#051a45]">Already have an account? <span className='text-[#051a45]'> <Link to='/login' className='font-bold underline'>Login Here!</Link></span></p>

                </div>
            </form >
        </div >

    );
};

export default Register;