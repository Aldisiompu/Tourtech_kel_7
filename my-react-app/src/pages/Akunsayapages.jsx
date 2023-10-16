
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../assets/img/wisata/BgAkun.png";
import image1 from "../assets/img/pemandu/aldi.jpeg";
// import image2 from "../assets/img/pemandu/Vector.png";
import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/BgAkun.png";
import { Link } from "react-router-dom";
import image from "../assets/img/pemandu/aldi.jpeg"
import Footercomponent from "../Component/Fragments/Footercomponent";


const Akunsayapages = () => {
  return (
     <>

    <div className="editakun h-vh-100">
    
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          height: "110vh",
        }}
      >
          <Navbarwisata />
        
       
      <div className="text-wrapper "  style={{
        color:"white",
        fontSize:"64px",
        fontWeight:"700",
        lineHeight:"30px",
        textAlign:"right",
        paddingTop:"400px",
        marginRight:"80px",
        fontFamily:"serif"
      }}>Halaman Profil
    </div>
      </div>
      
      <div className="akun-container justify-content-center align-items-center  ">
        <div className="akun row mx-auto p-4 gap-3 ">
        <div className="backakun d-block  ">
          </div>
          <div className="d-flex gap-5">
          <div className="kotak col-md-4 text-center text-gray mt-5  ms-2 ">
            <div className="mb-4">
              <img
                src={image1}
                alt="Profil Aldi"
                className="img-fluid rounded-circle"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  paddingBottom:"7px"
                }}
              />
                <p className="text-white display-6 fw-bold mt-3">Aldi</p>
            </div>
          </div>
          <div className="col-md-7 text-center text-white  ml-auto  ">            
            <h2 className="mb-4 fw-bold ">Akun Saya</h2>
            <form className="login-form ">
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ALDI"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="aldi2023@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder=".............................."
                    required
                  />
                </div>
                
              </form>
          
          </div>
          
            </div>

            <div className="button "
            style={{
              marginLeft:"880px"
            }}>
            <a href="/akun" className="button ms-auto rounded-2"> <button class="ms-auto rounded-2">Edit</button></a>
            </div>
          </div>
        </div>
      </div>
      

            
        
    </>
  );
};

export default Akunsayapages;
