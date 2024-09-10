import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Sofa from './pages/Sofa'
import Chair from './pages/Chair'
import Bed from './pages/Bed'
import BookShelves from './pages/BookShelves'
import CenterTable from './pages/CenterTable'
import Dining from './pages/Dining'
import DressingTable from './pages/DressingTable'
import HomeDecor from './pages/HomeDecor'
import Matters from './pages/Matters'
import Ofc from './pages/Ofc'
import Outdoor from './pages/Outdoor'
import Recliner from './pages/Recliner'
import ShoeRack from './pages/ShoeRack'
import Wardrobe from './pages/Wardrobe'
import Callback from './pages/Callback'
import Wishlist from './pages/Wishlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from './components/ScrollToTopButton'






const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]  '>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/sofa' element={<Sofa/>}/>
      <Route path='/chair' element={<Chair/>}/>
      <Route path='/bed' element={<Bed/>}/>
      <Route path='/bookshelves' element={<BookShelves/>} />     
      <Route path='/centertable' element={<CenterTable/>} />     
      <Route path='/dining' element={<Dining/>} />
      <Route path='/dressingtable' element={<DressingTable/>} />
      <Route path='/homedecor' element={<HomeDecor/>} />
      <Route path='/matters' element={<Matters/>} />
      <Route path='/ofc' element={<Ofc/>} />
      <Route path='/outdoor' element={<Outdoor/>} />
      <Route path='/recliner' element={<Recliner/>} />
      <Route path='/shoerack' element={<ShoeRack/>} />
      <Route path='/wardrobe' element={<Wardrobe/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/callback' element={<Callback/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      
    </Routes>

    </div>
    <Footer  />
    <ScrollToTopButton/>
    </>
  )
}

export default App