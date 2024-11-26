
import BasicButton from "@/app/component/basicbutton"
import { useEffect, useState } from "react"
import axios from "axios";
export default function domain() {
const [Q,SetQ] = useState("");
    const submitsearch = async() =>{

    }
    return (
        <div className="flex items-center flex-col justify-center pt-[10%]">
            <div className="flex gap-4">
            <BasicButton  className="mb-4" variant="dashed">مشاهده دامنه ها</BasicButton>
            <BasicButton  className="mb-4" variant="dashed">انتقال دامنه</BasicButton>

            </div>
            <div className="card w-[400px]">
                <div className="card-body">
                    <form onSubmit={submitsearch}>
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
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}