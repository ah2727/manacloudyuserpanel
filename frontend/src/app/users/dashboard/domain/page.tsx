


export default function domain() {

    return (
        <div className="flex justify-center pt-[10%]">
            <div className="card">
                <div className="card-body">
                    <form action="index.html">
                        <div className="mb-3">
                            <label className="inline-block mb-2 text-base font-medium">Text <span className="text-red-500">*</span></label>
                            <input type="text" id="inputText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                        </div>
                        <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}