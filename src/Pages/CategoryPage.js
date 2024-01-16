import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import Loading from "../Components/Loading";
import Blogs from "../Components/Blogs";
import { MdDarkMode, MdLightMode } from 'react-icons/md'



export default function CategoryPage(){
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const { loading,  mode, changeMode } = useContext(AppContext);
    const navigation = useNavigate();
    

    return (
        <div className="dark:bg-slate-950 bg-white min-h-screen">
            <NavBar/>
            <div className="w-[550px] mx-auto pt-20 pb-6 
            dark:bg-slate-950 dark:text-white">
                {
                    loading ?
                        <Loading />
                        :

                        <div>
                            <div className="flex items-center">
                                <button onClick={()=>{navigation(-1)}}
                                className="border-2 dark:border-white dark:text-white text-lg rounded-md px-3 py-1"
                                >Back</button> &nbsp;
                                <p className="text-xl">Blogs on <span className="font-semibold underline">{category.replace('%20', ' ')}</span></p>
                            </div>

                            <Blogs/>

                            

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

            

            <Footer/>


        </div>
    );
}