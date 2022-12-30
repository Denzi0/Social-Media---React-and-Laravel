import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [dataAdded, isDataAdded] = useState(false);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        console.log(formValues);
    };

    const submitRegisterForm = (e) => {
        e.preventDefault();

        const data = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
        };

        axios.post("http://localhost:3000/api/register", data).then((res) => {
            if (res.data.status === 200) {
                console.log("succesfully record");
                e.target.reset();

                isDataAdded(true);
            }
        });
    };
    return (
        <div className="flex items-center h-full mx-auto">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto w-1/4">
                {dataAdded ? (
                    <div
                        className="p-4 mb-4 text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert"
                    >
                        <span className="font-medium">
                            Registered Sucessfully
                        </span>
                    </div>
                ) : (
                    ""
                )}

                <form
                    action="/register"
                    method="POST"
                    onSubmit={submitRegisterForm}
                >
                    <div className="form-group mb-6 ">
                        <label
                            for="name"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="name"
                            aria-describedby="emailHelp123"
                            placeholder="Name"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-6"></div>
                    <div className="form-group mb-6">
                        <label
                            for="email"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Email address"
                            onChange={handleInput}
                        />
                    </div>
                    <label
                        for="password"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        onChange={handleInput}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="mt-5 w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
