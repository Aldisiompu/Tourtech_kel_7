import Navbarcomponent from "../Component/Fragments/Navbarcomponent";
// import Cardcomponent from "../Component/Fragments/Cardcomponent";
import Bgimage from "../assets/welcomeimg.png";

const Welcomepages = () => {
  return (
    <div className="Welcome bg-secondary h-vh-100">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Navbarcomponent />
        <div className="container">
          <h1 className=" display-4  mt-5 text-center text-info fw-bold">
            Senang Berwisata Di
            <p className="fw-bold text-white">BUTON TENGAH</p>
          </h1>

          <div className=" populer text-white">
            <h6>Populer</h6>
            <hr className="underline" />
          </div>

          <div
            className="row  d-flex align-items-center justify-content-center"
            style={{ height: "100vh", width: "max-w-80px" }}
          >
            {/* <div className="col-lg-4  ">
              <Cardcomponent></Cardcomponent>
            </div>
            <div className=" col-lg-4 ">
              <Cardcomponent></Cardcomponent>
            </div>
            <div className=" col-lg-4 ">
              <Cardcomponent></Cardcomponent>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcomepages;
