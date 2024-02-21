import { resData } from "../Constants";
const RestPage = () => {
  return (
    <div className="h-screen bg-white px-44 py-12 mt-16">
      <div className="mb-16">
        <h1 className="text-center text-4xl font-bold mb-2">Restuarants</h1>
        <p className="text-center font-semibold text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, quam
          magnam quidem aut voluptatibus, accusamus, vel rem dolore nostrum
          repellendus{" "}
        </p>
      </div>
      <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6  grid-cols-1 ">
        {resData.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col gap-10 mb-4 items-center justify-center border rounded-2xl pb-4"
            >
              <div className="hover:shadow-3xl  hover:cursor-pointer ">
                <img
                  src={item.img}
                  alt=""
                  className="hover:scale-105 h-full w-full rounded-tr-2xl rounded-tl-2xl "
                />
              </div>
              {/* stats */}
              <div className="w-full px-4 space-y-3">
                <h1 className="font-Urbanist text-2xl text-center font-semibold text-coral-red">{item.name}</h1>
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-xl font-palanquin font-semibold ">
                    Food Generated
                  </h1>
                  <h1 className="text-2xl font-palanquin font-semibold ">
                    {item.foodGenerated}
                  </h1>
                </div>
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-xl font-montserrat text-coral-red font-semibold">
                    Food Wasted
                  </h1>
                  <h1 className="text-2xl font-montserrat text-coral-red font-semibold">
                    {item.foodWasted}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestPage;
