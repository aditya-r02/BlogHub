import './App.css'

import { useContext } from 'react'
import { AppContext } from './Contexts/AppContext'

import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function App() {
  const { mode, changeMode } = useContext(AppContext);
  const c1 = mode ? 'dark' : 'light;'

  return (
    <div className={`relative ${c1} w-screen `}>
      <div className='bg-white dark:bg-slate-950 w-full '>
        
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Blog/:blogID' element={<BlogPage />} />
            <Route path='/Category/:category' element={<CategoryPage />} />
            <Route path='/Tag/:tag' element={<TagPage />} />
          </Routes>

          <div className='fixed right-8 bottom-16 dark:text-white border dark:border-gray-300 p-2 rounded-md border-gray-500
            text-2xl cursor-pointer dark:bg-black bg-white' onClick={changeMode}>
            {
              mode ?
                <span><MdLightMode /></span>
                :
                <span><MdDarkMode /></span>
            }
          </div>
        
      </div>
    </div>
  );
}
