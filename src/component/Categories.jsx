import React from 'react';

 
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 shadow flex">
      <img src={image} alt={title} className="w-1/3 h-32 object-cover mr-4" />
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <ul className="text-gray-500 list-disc list-inside">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
const Categories = () => {
  return (
    <section className="container mx-auto my-6">
      <h3 className="text-2xl font-semibold   mb-6">Top Categories Of The Month</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Using the Card component with props */}
        <Card 
          title="Electronics" 
          description={["TVs", "ACs", "Washing Machines"]} 
          image="https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=800" 
        />
        <Card 
          title="Clothings" 
          description={["Womens", "Mens", "Bags"]} 
          image="https://images.pexels.com/photos/8030176/pexels-photo-8030176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408" 
        />
        <Card 
          title="Computers" 
          description={["Laptops", "PCs", "Accessories"]} 
          image="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=800" 
        />
        <Card 
          title="Home & Kitchen" 
          description={["Furniture", "Decor", "Cookware"]} 
          image="https://images.pexels.com/photos/8135544/pexels-photo-8135544.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
        />
        <Card 
          title="Health & Beauty" 
          description={["Makeup", "Skincare"]} 
          image="https://images.pexels.com/photos/4685466/pexels-photo-4685466.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
        />
        <Card 
          title="Jewelry & Watch" 
          description={["Necklaces", "Watches"]} 
          image="https://images.pexels.com/photos/1050312/pexels-photo-1050312.jpeg?auto=compress&cs=tinysrgb&w=800" 
        />
      </div>
    </section>
  );
};

export default Categories;
