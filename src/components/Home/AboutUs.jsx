import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="mb-28">
      <div className="flex items-center">
        <div className="flex-1  relative">
          <img
            className="w-[30rem]  h-[30rem] object-cover rounded-lg"
            src={person}
            alt=""
          />
          <img
            className="w-[20rem] border-white border-8 right-44 -mt-64 h-[20rem] object-cover rounded-lg absolute "
            src={parts}
            alt=""
          />
        </div>
        <div className="flex-1  space-y-5">
          <h3 className="text-main font-bold text-xl">About us</h3>
          <h3 className="font-bold text-4xl">
            We are qualified <br /> & of experience <br /> in this field
          </h3>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {"don't "}look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {"don't"} look even slightly
            believable.
          </p>
          <div>
            <button className="btn capitalize bg-main hover:bg-main text-white">
              Get More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
