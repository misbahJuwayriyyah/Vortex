// React project using vite package. Vite JS is majorly used to set up a development environment for various frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading by following just three commands. Vite is a bridge between Twig/Craft CMS and the next-generation frontend build tool Vite. js.
// --npm create vite@latest
// Project Name : frontend
// Framework : react
// variant : Js
// -> frontend -> --npm install (to go front vite to react)
// Dependencies:
//     React Router Dom
//     React Toastify (toast notifications)
//Install ES& React etc. extension
//Add all the images in the assets--whatever is inside the assets folder can be used for building future ecommerce websites
//Vite + Tailwind : --npm install -D tailwindcss postcss autoprefixer
//--npx tailwindcss init -p
//The above two commands will lead to -> tailwind.config.js & potcss.config.js -> follow the codes on website
//Pages and components folders are used for different purposes.
import React from 'react'
import {Routes,Route} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Login from './pages/Login'
//Components
import Navbar from './components/Navbar'

const App = () => {
  return (
    //px=padding x, sm=small screen, md:medium screen, lg:large screen, vw=view width
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* We will mount components here (before routes) which we want to be available for every page r.g., navbar */}
      <Navbar/>


      {/*Let's write the routes for all the pages.Always use the imported pages in form of a tag. */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
