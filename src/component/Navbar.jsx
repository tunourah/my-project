import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav className="bg-yellow-500 p-4">
  <div className="container mx-auto flex flex-wrap justify-around items-center">
    <button className="block md:hidden text-black font-semibold">Menu</button>
    <div className="hidden md:flex space-x-4">
      <a href="#" className="text-black font-semibold">ALL CATEGORIES</a>
      <a href="#" className="text-stone-300   font-bold">TODAY DEALS</a>
      <a href="#" className="text-black font-semibold">ELECTRONICS</a>
      <a href="#" className="text-black font-semibold">CLOTHINGS</a>
      <a href="#" className="text-black font-semibold">COMPUTERS</a>
      <a href="#" className="text-black font-semibold">FURNITURES</a>
      <a href="#" className="text-black font-semibold">MOM & BABY</a>
      <a href="#" className="text-black font-semibold">BOOKS & MORE</a>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar