import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const handelLogin = async (data) => {
        console.log(data)
    }

    const handleGoogle = () => {

    }

    return (
        <div className='my-32 mx-auto max-w-96 flex justify-center items-center flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Login</h1>
            <form onSubmit={handleSubmit(handelLogin)} className='flex flex-col bg-white shadow-2xl px-12 py-6 rounded-xl min-w-[500px]'>

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
                    <label className="label">
                        <button className="text-[#051a45]">Forgot password?</button>
                    </label>
                </div>


                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>

                {/* Or logi nwith google draw a horizontal line with or*/}
                <div className="flex items-center mt-4">
                    <hr className="w-full border-gray-300" />
                    <label className="label text-sm text-gray-500">Or</label>
                    <hr className="w-full border-gray-300" />
                </div>
                <div className="form-control mt-4">
                    <button className="btn btn-primary" onClick={handleGoogle}>Login with Google</button>
                </div>
                {/* Not registered yet? */}
                <div className="form-control mt-4 mb-2">

                    <p className="label-text text-[#051a45]">Not registered yet? <span className='text-[#051a45]'> <Link to='/register' className='font-bold underline'>Register Here!</Link></span></p>

                </div>
            </form >
        </div >

    );
};

export default Login;