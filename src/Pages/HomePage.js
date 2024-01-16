import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'
import {MdDarkMode,  MdLightMode} from 'react-icons/md'
import { AppContext } from '../Contexts/AppContext'
import { useContext } from 'react'

export default function HomePage(){

    const {mode, changeMode} = useContext(AppContext);

    return (
        <div className='dark:bg-slate-950 bg-white'>
            <NavBar/>
            <div className='h-20'></div>
            <Blogs/>
            <Footer/>
            <div className='fixed right-16 bottom-20 dark:text-white border dark:border-gray-300 p-2 rounded-md border-gray-500
            text-2xl cursor-pointer' onClick={changeMode}>
            {
                mode?
                <span><MdLightMode/></span>
                :
                <span><MdDarkMode/></span>
            }
            </div>
      </div>
    );
}