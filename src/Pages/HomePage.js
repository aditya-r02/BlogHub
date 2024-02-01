import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'
import {MdDarkMode,  MdLightMode} from 'react-icons/md'
import { AppContext } from '../Contexts/AppContext'
import { useContext } from 'react'

export default function HomePage(){

    const {mode, changeMode} = useContext(AppContext);

    return (
        <div className='dark:bg-slate-950 bg-white w-full'>
            <NavBar/>
            <div className='h-20'></div>
            <Blogs/>
            <Footer/>
            
      </div>
    );
}