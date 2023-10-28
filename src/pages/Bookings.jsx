import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const { user } = useContext(AuthContext);

  const userId = user?.uid;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings/iGFgyKh3pSOaLpZ3xQBKS0mik4h1`)
      .then((data) => {
        setBookings(data.data);
      });
  }, []);

  return (
    <div>
      {/* banner section */}
      <div className="service-banner relative rounded-lg mb-28">
        <div className="py-28 pl-24 bg-gradient-to-r rounded-lg from-[#151515]">
          <h3 className="font-bold text-white text-4xl">Bookings</h3>
          <p className="text-main mt-3">Home - Bookings </p>
        </div>
      </div>

      <p>bookings : {bookings.length} </p>
    </div>
  );
};

export default Bookings;
