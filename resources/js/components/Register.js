import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [formValues, setFormValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        console.log(formValues);
    };

    const submitRegisterForm = (e) => {
        e.preventDefault();

        const data = {
            fname: formValues.fname,
            lname: formValues.lname,
            email: formValues.email,
            password: formValues.password,
        };

        console.log(data);
    };
    return (
        <div className="flex items-center h-full">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <form method="post" onSubmit={submitRegisterForm}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input
                                name="fname"
                                type="text"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleInput123"
                                aria-describedby="emailHelp123"
                                placeholder="First name"
                                required
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group mb-6">
                            <input
                                name="lname"
                                type="text"
                                className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleInput124"
                                aria-describedby="emailHelp124"
                                placeholder="Last name"
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input
                            name="email"
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput125"
                            placeholder="Email address"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            name="password"
                            type="password"
                            className="form-control block
                            onChange={handleInput}
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput126"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
                    >
                        Sign up
                    </button>
                    <div className="form-group form-check text-center mb-6">
                        <p className="text-gray-800 mt-6 text-center">
                            Already have an account ?{" "}
                            <Link
                                to="/"
                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
