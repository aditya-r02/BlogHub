import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";



export default function Footer() {
    const { page, totalPage, pageHandler } = useContext(AppContext);
    return (
        <div className={`w-full mx-auto fixed bottom-0  bg-white shadow-foot-light px-2
        dark:bg-slate-950 dark:text-gray-100 dark:shadow-foot-dark`}>
            <div className="w-full max-w-[50rem] mx-auto flex justify-between py-2">
                <div className="flex gap-3">
                    {
                        (page > 1) &&
                        <button className="border border-gray-400 py-1 px-2 rounded-md text-sm" onClick={() => pageHandler(page - 1)}>Previous</button>
                    }
                    {
                        (page < totalPage) &&
                        <button className="border border-gray-400 py-1 px-2 rounded-md text-sm" onClick={() => pageHandler(page + 1)}>Next</button>
                    }
                </div>

                <div className="text-sm font-semibold h-full my-auto">
                    Page {page} of {totalPage}
                </div>
            </div>
        </div>
    );
}