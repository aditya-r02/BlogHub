import { useContext } from "react";
import {AppContext} from "../Contexts/AppContext";
import Loading from "./Loading";
import Card from './Card'


export default function Blogs(){
    const {loading, data} =  useContext(AppContext);
    

    return (
        <div className="w-full pt-4 pb-12 min-h-screen px-2 max-w-[50rem] mx-auto
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