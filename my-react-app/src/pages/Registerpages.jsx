import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/welcomeimg.png";

const Registerpages = () => {
  return (
    <>
      <div className="register  h-vh-100">
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
            <div class="login-container">
              <form class="login-form">
                <h2>Register</h2>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" id="username" name="username" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>

                <Button>Register</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registerpages;
