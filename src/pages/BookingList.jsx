import PropTypes from "prop-types";
import Swal from "sweetalert2";

const BookingList = ({ booking, handleDelete }) => {
  const { _id, userId, title, img, price, date, email } = booking;

  const handleClick = (_id) => {
    Swal.fire({
      title: "Do you Want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Booking has been deleted");
        handleDelete(_id);
      }
    });
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleClick(_id)}
          className="btn btn-circle btn-sm btn-neutral"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center  gap-4">
          <div className="avatar">
            <div className="  w-36 rounded-md h-36 ">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-base">{title}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">${price}</td>
      <td className="font-bold">{date}</td>
      <th>
        <button className="btn bg-main text-white hover:bg-main btn-sm">
          Pending
        </button>
      </th>
    </tr>
  );
};

BookingList.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default BookingList;
