import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto my-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Ad */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 shadow relative">
              <img 
                src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Wooden Minimalistic Chairs" 
                className="w-full h-full max-h-80 object-cover mb-4"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-50">
                <h2 className="text-lg font-semibold">WOODEN MINIMALISTIC CHAIRS</h2>
                <p className="text-gray-800">SALE UP TO 40% Off</p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-slate-700">Shop Now</button>
              </div>
            </div>
          </div>
          {/* Side Ad */}
          <div>
            <div className="bg-white p-6 shadow relative">
              <img 
                src="https://images.pexels.com/photos/6046205/pexels-photo-6046205.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Pack of 5 T-Shirts for Summer" 
                className="w-full h-full max-h-80 object-cover mb-4"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-50">
                <h2 className="text-lg font-semibold">PACK 5 T-SHIRTS FOR SUMMER</h2>
                <p className="text-gray-300">Starting at $99.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
