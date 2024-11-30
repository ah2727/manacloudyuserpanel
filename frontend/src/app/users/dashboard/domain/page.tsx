"use client"
import BasicButton from "@/app/component/basicbutton"
import { useEffect, useState } from "react"
import axios from "axios";
import { api_url } from "@/app/url";
export default function domain() {
    const [Q, SetQ] = useState("");
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [domains, setDomains] = useState([]);
    const submitSearch = async (event) => {
        event.preventDefault(); // Prevent default browser behavior

        setLoading(true); // Start loading

        try {
            const formData = new FormData();
            formData.append("domain", Q); // Replace Q with the actual domain value

            const response = await axios.post(`${api_url}/domain/domainavilabity/`, formData, {
                timeout: 100000, // Set timeout to 10 seconds
            });
            setDomains(response.data.domains);
            console.log("Response:", response.data.domains); // Log or handle the response
        } catch (error) {
            if (error.response) {
                // Server responded with a status code out of 2xx range
                console.error("Error Response:", error.response.data);
            } else if (error.request) {
                // Request was sent but no response received
                console.error("No Response:", error.request);
            } else {
                // Something went wrong setting up the request
                console.error("Error:", error.message);
            }
        } finally {
            setLoading(false); // Stop loading, regardless of success or failure
        }
    };
    return (
        <div className="flex items-center flex-col justify-center pt-[10%]">

            <div className="card w-[400px]">
                <div className="card-body">
                    <form onSubmit={submitSearch}>
                        <div className="mb-3">
                            <label className="inline-block mb-2 text-base font-medium">دامنه مورد نظر خود را وارد کنید <span className="text-red-500">*</span></label>
                            <input onChange={e => SetQ(e.target.value)} type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className=" flex justify-center text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">جستجو</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card pt-10 w-[600px]">
                <div className="card-body flex justify-center ">
                    {loading && <div className="loading-indicator"></div>} {/* Show loading indicator */}
                    {domains &&  domains.length > 0 ? (
                    <table dir="ltr" className="table-auto">
                        <thead>
                            <tr>
                                <th>دامنه</th>
                                <th>در دسترس</th>
                                <th>قیمت</th>
                                <th></th>
                            </tr>
                        </thead>
                            <tbody>
                    {domains.map((item, index) => (
                                <tr key={index}>
                                    <td key={index}>{item.domain}</td>
                                    <td>{item.availability}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                    ):(<div></div>)}
                </div>
            </div>
        </div >
    )
}