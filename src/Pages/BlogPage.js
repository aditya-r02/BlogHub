import NavBar from "../Components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { MdDarkMode, MdLightMode } from 'react-icons/md'


export default function BlogPage() {
    const location = useLocation();
    const blogID = location.pathname.split("/").at(-1);
    const [mainBlog, setMain] = useState([]);
    const [extraBlog, setExtra] = useState([]);
    const navigation = useNavigate();

    const { loading, setLoading, mode, changeMode } = useContext(AppContext);

    useEffect(() => {
        generateData();
    }, [location.pathname, location.search])

    async function generateData() {
        const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogID}`;
        try {
            setLoading(true);
            const output = await axios.get(url);
            if (output == null) throw new Error("Error 404")
            setMain(output.data.blog);

            setExtra(output.data.relatedBlogs);
            setLoading(false);
        }

        catch {
            console.log("Error 404");
        }
    }


    return (
        <div className="dark:bg-slate-950 bg-white min-h-screen">
            <NavBar />

            <div className="w-[550px] mx-auto pt-20 pb-6 
            dark:bg-slate-950">
                {
                    loading ?
                        <Loading />
                        :

                        <div>
                            <button onClick={()=>{navigation(-1)}}
                            className="border-2 dark:border-white dark:text-white text-lg rounded-md px-3 py-1"
                            >Back</button>

                            <Card data={mainBlog} />
                            <h3 className="w-[550px] mx-auto dark:text-white font-bold text-2xl">Related Blogs:</h3>
                            <div className="w-[550px] mx-auto pb-12 min-h-screen
            dark:bg-slate-950">
                                {
                                    extraBlog && extraBlog.map((blog) => (
                                        <Card key={blog.id} data={blog} />
                                    ))
                                }
                            </div>

                            <div className='fixed right-16 bottom-20 dark:text-white border dark:border-gray-300 p-2 rounded-md border-gray-500
            text-2xl cursor-pointer' onClick={changeMode}>
                                {
                                    mode ?
                                        <span><MdLightMode /></span>
                                        :
                                        <span><MdDarkMode /></span>
                                }
                            </div>

                        </div>
                }
            </div>





        </div>
    );
}