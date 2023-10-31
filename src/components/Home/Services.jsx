import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://car-doctor-server-sable-ten.vercel.app/services")
      .then((data) => setAllServices(data.data));
  }, []);

  return (
    <div className="my-12">
      <div className="text-center space-y-5">
        <h3 className=" font-bold text-main">Service</h3>
        <h3 className="text-4xl font-bold ">Our Service Area</h3>
        <p className="text-[#737373] capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which {"don't"} look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allServices.map((service) => (
            <ServiceCard
              key={service.service_id}
              service={service}
            ></ServiceCard>
          ))}
        </div>
        <button className="btn hover:border-none btn-outline text-main border-main  hover:bg-main">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
