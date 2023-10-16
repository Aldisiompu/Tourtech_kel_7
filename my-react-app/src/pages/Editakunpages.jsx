import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../assets/img/wisata/BgAkun.png";
import image1 from "../assets/img/pemandu/aldi.jpeg";
import image2 from "../assets/img/pemandu/Vector.png";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Editakunpages = () => {
  return (
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
            <a href="/akunsaya"><img src={image2} alt="" /></a>
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
          <div className="col-md-7 text-center text-white  ml-auto ">            
            <h2 className="mb-4 fw-bold ">Edit Data</h2>
            <form className="login-form ">
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="masukan username "
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="masukan email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password Lama</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="masukan password lama"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label for="password">Password Baru</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="masukan password baru"
                    required
                  />
                </div>
              </form>
           
          </div>
          
            </div>
            <div className="button "
            style={{
              marginLeft:"870px"
            }}>
            <Link to="/akunsaya"> <Button class="ms-auto rounded-2">Simpan</Button> </Link>
          
            </div>
          </div>
        </div>
        <Footercomponent/>
      </div>
      
  );
};

export default Editakunpages;
