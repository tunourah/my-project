import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className="container mx-auto my-6">
        <div className="bg-white p-6 shadow flex items-center justify-between text-center">
          <div className="flex-1">
            <h4 className="text-2xl font-semibold">Bose Bluetooth Wireless Headphones</h4>
            <p className="text-gray-500 line-through">$260.50</p>
            <p className="text-green-600 font-bold">$219.05</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">Shop Now</button>
          </div>
          <div className="flex-1 max-h-72">
            <img 
              src="https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
              alt="Bose Bluetooth Wireless Headphones" 
              className="w-full max-h-72" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

