import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        error_list: [],
    });
    const [dataAdded, isDataAdded] = useState(false);
    const [errorLog, setErrorLog] = useState();
    const handleInput = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const submitLoginForm = (e) => {
        e.preventDefault();
        const data = {
            email: formValues.email,
            password: formValues.password,
        };
        axios.post("http://localhost:3000/api/login", data).then((res) => {
            if (res.data.status === 200) {
                e.target.reset();
                isDataAdded(true);
                console.log("succesfully login");
            }
            if (res.data.status === 401) {
                console.log(res.data.message);
            }
            if (res.data.validation_errors) {
                setFormValues({
                    ...formValues,
                    error_list: res.data.validation_errors,
                });
            }
        });
    };
    return (
        <div className="flex items-center justify-center h-full">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-full md:w-1/4">
                {!isDataAdded ? (
                    <div
                        className="p-4 mb-4 text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert"
                    >
                        <span className="font-medium">Login Sucessfully</span>{" "}
                    </div>
                ) : (
                    ""
                )}

                <form action="/login" method="POST" onSubmit={submitLoginForm}>
                    <div className="form-group mb-6">
                        <label
                            for="exampleInputEmail2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className={`${
                                formValues.error_list.email && "border-red-500"
                            } form-control block w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                            placeholder="Enter email"
                            onChange={handleInput}
                        />
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                            {formValues.error_list.email}
                        </span>
                    </div>
                    <div className="form-group mb-2">
                        <label
                            for="exampleInputPassword2"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            onChange={handleInput}
                            name="password"
                            type="password"
                            className={`${
                                formValues.error_list.password &&
                                "border-red-500"
                            } form-control block w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                            id="exampleInputPassword2"
                            placeholder="Password"
                        />
                    </div>
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {formValues.error_list.password}
                    </span>
                    <div className="flex justify-between items-center mb-6 mt-4">
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2"
                            />
                            <label
                                className="form-check-label inline-block text-gray-800"
                                for="exampleCheck2"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6
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
                        Sign in
                    </button>
                    <p className="text-gray-800 mt-6 text-center">
                        Not a member?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
