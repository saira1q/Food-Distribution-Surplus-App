import MapComponent from "./MapComponent";

const Map = () => {
  return (
    <div className=" ">
      <MapComponent />
      <div className="bg-green-800 z-[2] absolute w-full py-16 ">
        <div className="max-w-[1040px] mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-Urbanist text-4xl font-bold text-white">
              1st Compartment
            </h1>
            <button className="text-white bg-green-400 text-3xl w-[300px] py-3 font-bold">
              WORKING
            </button>
          </div>
          <div className="flex justify-between items-center mt-10">
            <h1 className="font-Urbanist text-4xl font-bold text-white">
              2nd Compartment
            </h1>
            <button className="text-white bg-red-500 text-3xl w-[300px] py-3 font-bold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
