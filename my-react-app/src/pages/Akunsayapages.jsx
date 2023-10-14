import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/BgAkun.png";
import { Link } from "react-router-dom";
import image from "../assets/img/pemandu/aldi.jpeg"

const Akunsayapages = () => {
  return (
    <>
      <div className="login  h-vh-100">
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
          {" "}
          <div className="body">
          
            
            <div className="login-container">
            <div className="d-flex gap-3">
            <div className="d-flex align-items-center justify-content-center"   >
              <div>
              <img src={image} alt="" className="d-flex justify-content-center align-items-center my-auto"
               style={{
                height:"250px",
                width:"250px",
                borderRadius:"100%",
                objectFit:"fill"
           
                
               }}
               />
               <p className="text-white display-6 fw-bold mt-3">Aldi</p>

              </div>
              
            </div>
              <div className="text-center text-white lh-1 mb-5">
              </div>
              <form className="login-form">
                <h2>Akun Saya</h2>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ALDI"
                    required
                  />
                  <hr class="text-white"></hr>
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
                  <hr class="text-white"></hr>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="................."
                    required
                  />
                </div>
                
              </form>
           
            </div>
            <div class="d-flex ">
            <a href="/edit" className="ms-auto rounded-2"> <button class="ms-auto rounded-2">Edit</button></a>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    </>
  );
};
export default Akunsayapages;
