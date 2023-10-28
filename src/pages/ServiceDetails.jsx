import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const [services,setServices]=useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/services").then(data=>setServices(data.data))
  },[])

  const { title, _id, img, facility, description, price } = serviceData;

  return (
    <div>
      {/* banner section */}
      <div className="service-banner relative rounded-lg mb-28">
        <div className="py-28 pl-24 bg-gradient-to-r rounded-lg from-[#151515]">
          <h3 className="font-bold text-white text-4xl">Service Details</h3>
        </div>
        <div className="absolute bottom-0 bg-main  rounded-lg   text-white right-[45%] ">
          <h3 className="font-medium px-8 py-3">Home/Service Details</h3>
        </div>
      </div>

      {/* service details */}
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div>
            <img
              className="rounded-lg w-full max-h-[30rem] object-cover "
              src={img}
              alt=""
            />
          </div>

          <div className="mt-12 ">
            <h3 className="font-bold mb-8 text-4xl">{title}</h3>

            <p className="text-[#737373] mb-4">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-8">
            {facility.map((data, idx) => (
              <div
                className="bg-[#F3F3F3] border-t-main border-t-2 p-10 rounded-xl"
                key={idx}
              >
                <h3 className="font-bold text-[1.12rem]">{data.name}</h3>
                <p className="text-[#737373]">{data.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <h3>Services : {services.length} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
