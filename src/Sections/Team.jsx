import { customer1 } from "../assets/images";

const team = [
  {
    name: "Saira Zafar",
    role: "2nd Year Univerity Student",
    study: "Bachelor Computer System Engineering",
    img: customer1,
  },
  {
    name: "Maira Zafar",
    role: "2nd Year Univerity Student",
    study: "Bachelor Computer System Engineering",
    img: customer1,
  },
  {
    name: "Uswa Asad",
    role: "2nd Year Univerity Student",
    study: "Bachelor Computer System Engineering",
    img: customer1,
  },
  
];

const Team = () => {
  return (
    <div className="px-16 py-20 bg-gray-100  relative">
      <div className="flex  flex-col items-center justify-center my-12">
      <h1 className="   text-4xl font-bold font-montserrat ">TEAM</h1>
      <div className="h-2 bg-gray-900 w-[8%] rounded-full  "></div>
      </div>
      
    <div className=" grid grid-cols-2 gap-16 ">
      {team.map((mem) => {
        return (
          <div
            key={mem.name}
            className="bg-white shadow-lg rounded-lg flex border-2 p-4 gap-10 items-center py-2"
          >
            <div>
              <img
                src={customer1}
                alt=""
                height={200}
                width={200}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold font-montserrat">{mem.name}</h1>
              <h1 className="text-xl font-semibold">{mem.role}</h1>
              <h1 className="text-xl font-semibold">{mem.study}</h1>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Team;
