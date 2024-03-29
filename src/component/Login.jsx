import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarApp from "./NavbarApp";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState("");

    async function handelSubmit(e) {
        let flag = true;
        e.preventDefault();
        setError(true);

        if (password.length < 8) {
            flag = false;
        } else {
            flag = true;
        }
        try {
            if (flag) {
                let res = await axios.post("http://127.0.0.1:8000/api/login", {
                    email: email,
                    password: password,
                });
                if (res.status == 200) {
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/";
                }
            }
        } catch (err) {
            // Handle the error
            setEmailError(err.response.status);
        }
    }
    return (
        <>
            <NavbarApp />
            <div className="flex justify-center items-center h-screen m-5 md:m-0">
                <form
                    onSubmit={handelSubmit}
                    className="w-full max-w-md bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h2 className="text-center text-3xl font-bold mb-4">Login</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="rounded bg-white border border-sky-300 block w-full text-sm p-2.5"
                            placeholder="Enter your email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && emailError && 422 && (
                            <p className=" text-red-700 my-1">the email is been token before.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="rounded bg-white border border-sky-300 block w-full text-sm p-2.5"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {password.length < 8 && error && (
                            <p className="text-red-700 my-1">
                                password should at least 8 characters
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded"
                    >
                        Login
                    </button>
                    <p className=" text-center mt-4  text-1xl">
                        Already have an account?{" "}
                        <Link
                            className="underline underline-offset-4 text-blue-600"
                            to="/login"
                        >
                            Log In
                        </Link>{" "}
                    </p>
                </form>
            </div>
        </>

    )
}

export default Login