import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../assets/img/BgAkun.png";
import image1 from "../assets/img/pemandu/aldi.jpeg"
// import image2 from "../assets/img/pemandu/Vector.png"
const Editakunpages = () => {
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
        <Navbarwisata/>
         
          <div className="body">
          
            <div className="login-container">
            <div className="backakun d-block mt-0 ">
          </div>
            <div className="d-flex gap-3">
            <div className="d-flex align-items-center justify-content-center"   >
              <div>
              <img src={image1} alt="" className="d-flex justify-content-center align-items-center my-auto"
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
                <h2>Edit Data</h2>
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
            <div class="d-flex ">
            <a href="/akunsaya" className="ms-auto rounded-2"> <button class="ms-auto rounded-2">Simpan</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent/>
      </div>
        
    </>
  );
};
export default Editakunpages;
