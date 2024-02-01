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
        <div className="dark:bg-slate-950 bg-white min-h-screen w-full px-1">
            <NavBar/>
            <div className="w-full mx-auto pt-20 pb-6 
            dark:bg-slate-950 dark:text-white max-w-[50rem] max-auto">
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

                            

                            

                        </div>
                }
            </div>

            

            <Footer/>


        </div>
    );
}