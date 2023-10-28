import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiTwotoneFile } from "react-icons/ai";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((data) => setServices(data.data));
  }, []);

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

        {/* sidebar */}
        <div className="col-span-1">
          {/* dynamic services */}
          <div className="bg-[#F3F3F3] p-10 rounded-lg">
            <h3 className="font-bold text-xl mb-5">Services</h3>

            <div>
              {services && (
                <div className="space-y-5">
                  {services.map((single) => (
                    <div key={single._id}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "service-active " : ""
                        }
                        to={`/service-details/${single._id}`}
                      >
                        <div className="hover:bg-main bg-white hover:text-white p-5  rounded-lg">
                          <p className="flex  items-center justify-between">
                            {single.title} <BsArrowRight></BsArrowRight>{" "}
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* download section */}
          <div className="my-7 p-10 rounded-lg ] bg-[#151515] text-white ">
            <h3 className="font-bold text-xl mb-5">Download</h3>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <AiTwotoneFile className="text-xl"></AiTwotoneFile>
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Brochure</h3>
                    <p className="text-[#A2A2A2]">Download</p>
                  </div>
                </div>
                <div className="p-4 bg-main rounded-md cursor-pointer">
                  <BsArrowRight></BsArrowRight>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <AiTwotoneFile className="text-xl"></AiTwotoneFile>
                  </div>
                  <div>
                    <h3 className="font-semibold">Company Details</h3>
                    <p className="text-[#A2A2A2]">Download</p>
                  </div>
                </div>
                <div className="p-4 bg-main rounded-md cursor-pointer">
                  <BsArrowRight></BsArrowRight>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-4xl mb-7">Price ${price} </h3>

            <Link>
              <button className="btn w-full capitalize bg-main font-semibold hover:bg-main text-white">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
