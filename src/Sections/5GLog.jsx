import { text } from "../Constants";
import why from '../assets/images/nn.jpg'
const Log5G = () => {
  return (
   <section  className="bg-gray-100">
     <div id="Food " className="py-32 xl:px-10 padding-x max-container ">
     <div className="flex">
      <div className="w-2/3">
       {
        text.map((obj)=>{
          return <div key={obj.heading} className="mb-4">
            <h1 className="text-3xl font-semibold">{obj.heading}</h1>
            <p className="text-xl tracking-normal">{obj.text}</p>
          </div>
        })
       }
      </div>
      <div>
       <img src={why} alt="" />
      </div>

     </div>
    </div>
   </section>
  );
};

export default Log5G;
