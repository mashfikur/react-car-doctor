import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { BsArrow90DegLeft } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import BookingList from "./BookingList";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const userId = user?.uid;

  useEffect(() => {
    setBookingLoading(true);
    axios
      .get(
        `https://car-doctor-server-sable-ten.vercel.app/bookings/${userId}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        setBookings(data.data);
        setBookingLoading(false);
      });
  }, [userId]);

  const handleDelete = (_id) => {
    axios
      .delete(
        `https://car-doctor-server-sable-ten.vercel.app/bookings/${_id}/delete`
      )
      .then((data) => {
        if (data?.data?.deletedCount) {
          const remaining = bookings.filter((data) => data._id !== _id);
          setBookings(remaining);
        }
      });
  };

  return (
    <div>
      {/* banner section */}
      <div className="service-banner relative rounded-lg mb-28">
        <div className="py-28 pl-24 bg-gradient-to-r rounded-lg from-[#151515]">
          <h3 className="font-bold text-white text-4xl">Bookings</h3>
          <p className="text-main mt-3">Home - Bookings </p>
        </div>
      </div>

      {/* table */}
      {bookingLoading ? (
        <div className="flex min-h-screen items-center justify-center flex-col">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : bookings.length ? (
        <div className="mb-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-base">Service</th>
                  <th className="text-base">Price</th>
                  <th className="text-base">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((data) => (
                  <BookingList
                    key={data._id}
                    booking={data}
                    handleDelete={handleDelete}
                  ></BookingList>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="min-h-[50vh]">
          <h3 className=" text-center capitalize text-5xl font-bold text-gray-400">
            You {"haven't"} booked any services yet{" "}
          </h3>
        </div>
      )}

      {/* buttons */}
      <div className="flex items-center mb-32 text-[1.12rem] justify-between">
        <div>
          <Link to="/">
            <h3 className="flex items-center gap-3">
              <BsArrow90DegLeft></BsArrow90DegLeft>
              Continue Shopping
            </h3>
          </Link>
        </div>
        <div>
          <h3 className="flex items-center gap-3">
            <RiDeleteBin6Line></RiDeleteBin6Line>
            Clear Shopping Cart
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
