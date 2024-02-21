import { products } from '../Constants'

const Products = () => {
  return (
    <div className='h-screen bg-white px-44 py-12 mt-16'>
        <div className="mb-16">
            <h1 className='text-center text-4xl font-bold mb-2'>Our Vegetables</h1>
            <p className='text-center font-semibold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, quam magnam quidem aut voluptatibus, accusamus, vel rem dolore nostrum repellendus </p>
        </div>
        <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6  grid-cols-1 ">
          {products.map((item) => {
            return (
              <div key={item.price} className="flex flex-col gap-10 mb-4 items-center justify-center ">
                <div className="hover:shadow-3xl  w-[282px] max-lg:w-[250px] rounded-3xl hover:cursor-pointer">
                  <img
                    src={item.imgURL}
                    alt=""
                    className="hover:scale-105 h-full w-full"
                  />
                </div>
                {/* stats */}
                <div className="flex flex-col gap-3 justify-center items-center">
                
                  <h1 className="text-2xl font-palanquin font-semibold ">
                    {item.name}
                  </h1>
                  <h1 className="text-2xl font-montserrat text-coral-red font-semibold">
                    {item.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Products