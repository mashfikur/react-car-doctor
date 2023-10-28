import { useLoaderData, useParams } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();
  const serviceData = useLoaderData();
  const { _id, title, img, price } = serviceData;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log(name, date, phone, email, message);
  };

  return (
    <div>
      {/* banner section */}
      <div className="service-banner relative rounded-lg mb-32">
        <div className="py-28 pl-24 bg-gradient-to-r rounded-lg from-[#151515]">
          <h3 className="font-bold text-white text-4xl">Check Out</h3>
        </div>
        <div className="absolute bottom-0 bg-main  rounded-lg   text-white right-[45%] ">
          <h3 className="font-medium px-8 py-3">Home/Checkout</h3>
        </div>
      </div>

      {/* checkout form */}

      <div className="p-24 bg-[#F3F3F3] rounded-lg mb-32">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <input
                className="w-full rounded-md py-4 px-6"
                placeholder="First Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex-1">
              <input
                className="w-full rounded-md py-4 px-6"
                placeholder="Last Name"
                type="date"
                name="date"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <input
                className="w-full rounded-md py-4 px-6"
                placeholder="Your Phone"
                type="number"
                name="phone"
                required
              />
            </div>
            <div className="flex-1">
              <input
                className="w-full rounded-md py-4 px-6"
                placeholder="Your Email"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              className="resize-none w-full rounded-md p-6"
              name="message"
              id=""
              cols="30"
              placeholder="Your Message"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className="btn capitalize bg-main text-white font-semibold hover:bg-main w-full">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
