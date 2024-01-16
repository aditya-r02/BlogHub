import { useContext } from "react";
import {AppContext} from "../Contexts/AppContext";
import Loading from "./Loading";
import Card from './Card'


export default function Blogs(){
    const {loading, data} =  useContext(AppContext);
    

    return (
        <div className="w-[550px] mx-auto pt-4 pb-12 min-h-screen
        dark:bg-slate-950">
            {
                loading?
                <Loading />
                :
                (data? data.map(card1=> (<Card key={card1.id} data={card1}/>)): null )
            }
        </div>
    );
}