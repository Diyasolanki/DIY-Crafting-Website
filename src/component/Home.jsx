import React from 'react';

const HOme = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-[60vh]">
        <img
          src="https://img.freepik.com/free-photo/craft-equipment-blue-origami-paper-fan-beige-background_23-2148188384.jpg?semt=ais_hybrid"
          alt="Crafting Background"
          className="w-full h-full object-cover"
        />
        {/* inset : set top bottom left right to 0 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome To Our DIY Crafting Shop
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center">
            Discover unique crafting materials and tools to ignite your creativity.
          </p>
        </div>
      </div>

    <h1 className='flex mt-3 py-3 item-center justify-center text-3xl md:text-4xl font-bold bg-white '>Our Aim</h1>
    <div className='mt-9 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-4 px-4 bg-white'>
      <div>
      <img className=' ml-2 h-[10vh] '
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUROOPnkkGkxM3w56mDij2g4SI7K_SJ8raxA&s" alt="" />
       <p className='mt-3 text-lg text-gray-500 font-bold '>Unique Idea</p>
      </div>
      <div>
        <img  className='h-[10vh]  '
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGhGQ0YdadYyu_u5MlGJNc_BmMT2Tw-ANKw&s" alt="" />
        <p className='mt-3 text-lg text-gray-500 font-bold '> Easy To Follow</p>
      </div>

      <div>
        <img className='h-[10vh]'
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-lMDIh3ha0Y1aS8aoda8z-zhZOTjqO9FFg&s" alt="" />
         <p className='mt-3 text-lg text-gray-500 font-bold'>High Quality </p>
      </div>

    <div>
      <img className='h-[10vh] g'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mpc8TAB0Yjeq06jf2o9QZauYiBrnLZWi6w&s" alt="" />
    <p className='mt-3 text-lg text-gray-500 font-bold'>Fast Delivery</p>
    </div>
        </div>


      <div className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZEoyK-X4zlguZPKWmBJWKRzaADEqoRkJ-A&s"
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              At our DIY Crafting Shop, we believe in the power of creativity.
              We provide high-quality crafting materials, tools, and guides to
              help you bring your ideas to life. Whether you're a beginner or an
              experienced crafter, we have everything you need to make your
              projects a success.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Our mission is to inspire creativity and innovation by offering
              unique and sustainable crafting supplies. Join us and explore the
              joy of crafting today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOme;
