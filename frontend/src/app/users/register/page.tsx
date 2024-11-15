"use client"
import { useState } from "react"
import { api_url } from "../../url"
import axios from "axios";

export default function register() {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");


    const handesubmit = async (e: any) => {
        e.preventDefault();
        if (password1 !== password2) {
            // setMessage("Passwords do not match.");
            return;
        }

        // Prepare data for API
        const data = {
            username: email,
            password: password1,
            password2,
        };
        try {
            const response = await axios.post(`${api_url}/users/create_user/`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                //   setMessage("User registered successfully!");
                console.log("Tokens:", response.data); // Access/Refresh tokens
            }
        } catch (err) {
            // Handle error messages from the server
            if (err.response && err.response.data) {
                //   setMessage(err.response.data?.email_or_mobile || err.response.data?.password || "Registration failed.");
            } else {
                //   setMessage("An error occurred. Please try again.");
            }
        }
    }
    return (
        <div >
            <div className="flex items-center justify-center min-h-screen py-16 lg:py-10 bg-slate-50 dark:bg-zink-800 dark:text-zink-100 font-public">
                <div className="relative">
                    <div className="absolute hidden opacity-50 ltr:-left-16 rtl:-right-16 -top-10 md:block">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 316" width="125" height="316">
                            <title>&lt;Group&gt;</title>
                            <g id="&lt;Group&gt;">
                                <path id="&lt;Path&gt;" className="fill-custom-100/50 dark:fill-custom-950/50" d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-100 dark:fill-custom-950" d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200/50 dark:fill-custom-900/50" d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200/75 dark:fill-custom-900/75" d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200 dark:fill-custom-900" d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300/50 dark:fill-custom-800/50" d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300/75 dark:fill-custom-800/75" d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300 dark:fill-custom-800" d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400/50 dark:fill-custom-700/50" d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400/75 dark:fill-custom-700/75" d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400 dark:fill-custom-700" d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-500/50 dark:fill-custom-600/50" d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z" />
                            </g>
                        </svg>
                    </div>

                    <div className="absolute hidden -rotate-180 opacity-50 ltr:-right-16 rtl:-left-16 -bottom-10 md:block">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 316" width="125" height="316">
                            <title>&lt;Group&gt;</title>
                            <g id="&lt;Group&gt;">
                                <path id="&lt;Path&gt;" className="fill-custom-100/50 dark:fill-custom-950/50" d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-100 dark:fill-custom-950" d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200/50 dark:fill-custom-900/50" d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200/75 dark:fill-custom-900/75" d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-200 dark:fill-custom-900" d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300/50 dark:fill-custom-800/50" d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300/75 dark:fill-custom-800/75" d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-300 dark:fill-custom-800" d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400/50 dark:fill-custom-700/50" d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400/75 dark:fill-custom-700/75" d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-400 dark:fill-custom-700" d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z" />
                                <path id="&lt;Path&gt;" className="fill-custom-500/50 dark:fill-custom-600/50" d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z" />
                            </g>
                        </svg>
                    </div>

                    <div dir="rtl" className="mb-0 w-screen lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
                        <div className="!px-10 !py-12 card-body">


                            <div className="mt-8 text-center">
                                <h4 className="mb-1 text-custom-500 dark:text-custom-500">اکانت خود را بسازید</h4>
                            </div>

                            <form onSubmit={handesubmit} className="mt-10" id="registerForm">
                                <div className="mb-3">
                                    <label className="inline-block mb-2 text-base font-medium">ایمیل</label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email-field" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="ایمیل را وارد کنید" />
                                    <div id="email-error" className="hidden mt-1 text-sm text-red-500">ایمیل خود را وارد کنید.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="inline-block mb-2 text-base font-medium">پسورد</label>
                                    <input value={password1} onChange={e => setPassword1(e.target.value)} type="password" id="password-field" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="پسورد را وارد کنید" />
                                    <div id="username-error" className="hidden mt-1 text-sm text-red-500">پسورد باید ۸ کارکتر و شامل اعداد و حروف باشد.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="inline-block mb-2 text-base font-medium">تکرار پسورد</label>
                                    <input value={password2} onChange={e => setPassword2(e.target.value)} type="password" id="password" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="پسورد را تکرار کنید" />
                                    <div id="password-error" className="hidden mt-1 text-sm text-red-500">پسورد باید ۸ کارکتر و شامل اعداد و حروف باشد.</div>
                                </div>
                                <div className="mt-10">
                                    <button type="submit" className="w-full text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">ثبتنام</button>
                                </div>

                                <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                    <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">ثبتنام با</h5>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2">
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600"><i data-lucide="facebook" className="w-4 h-4"></i></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600"><i data-lucide="mail" className="w-4 h-4"></i></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600"><i data-lucide="twitter" className="w-4 h-4"></i></button>
                                    <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600"><i data-lucide="github" className="w-4 h-4"></i></button>
                                </div>

                                <div className="mt-10 text-center">
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Already have an account ? <a href="auth-login-basic.html" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500">Login</a> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}