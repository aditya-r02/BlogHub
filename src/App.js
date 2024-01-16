import './App.css'

import { useContext } from 'react'
import { AppContext } from './Contexts/AppContext'

import { Route, Routes, Navigate  } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'

export default function App() {
  const {mode} = useContext(AppContext);
  const c1 = mode?'dark':'light;'
  
  return (
    <div className={`relative ${c1}`}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Blog/:blogID' element={<BlogPage/>}/>
        <Route path='/Category/:category' element={<CategoryPage/>}/>
        <Route path='/Tag/:tag' element={<TagPage/>}/>
      </Routes>
    </div>
  );
}
