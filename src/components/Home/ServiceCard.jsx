import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="p-5 border rounded-lg">
      <img
        className="h-[13rem] mx-auto w-full object-cover rounded-lg"
        src={service.img}
        alt="service-image"
      />
      <h3 className="text-2xl font-bold text-start my-2">{service.title}</h3>
      <div className="text-main text-xl font-bold flex items-center justify-between">
        <p>Price : ${service.price} </p>
        <Link>
          <BsArrowRight></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
