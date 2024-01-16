import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import {  useLocation } from "react-router-dom";



export const AppContext = createContext();

export default function AppContextCreator({children}){
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(null);
    const [totalPage, setTotal] = useState(null);
    const [data, setData] = useState([]);
    const [mode, setMode] = useState(true);
    
    
    const location = useLocation();


    useEffect(()=>{
        generateData();
    }, [location.pathname, location.search])

    

    async function generateData(page=1){
        let url = `${baseUrl}?page=${page}`;
        if (location.pathname.includes("Category")){
            const category = location.pathname.split("/").at(-1);
            url += `&category=${category}`;
        }
        else if (location.pathname.includes("Tag")){
            const tag = location.pathname.split('/').at(-1);
            url += `&tag=${tag}`;
        }

        console.log(url);
        try{
            setLoading(true);

            const output = await axios.get(url);
            //console.log(output);
            setData(output.data.posts);
            setPage(output.data.page);
            setTotal(output.data.totalPages);
            
            setLoading(false);

        }catch{
            console.log("error 404");
            setData([]);
            setLoading(false);
            setPage(null);
            setTotal(null);
        }
    }

    function pageHandler(page){
        generateData(page);
        

    }

    function changeMode(){
        setMode(!mode);
    }

    const value = {
        loading,
        page, 
        totalPage,
        pageHandler,
        data,
        mode, 
        changeMode,
        setLoading
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}