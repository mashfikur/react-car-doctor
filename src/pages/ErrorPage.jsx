import errorCover from "../assets/images/error/error-page-cover.png";
import Navbar from "../shared/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center min-h-[70vh] justify-center">
        <img src={errorCover} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
