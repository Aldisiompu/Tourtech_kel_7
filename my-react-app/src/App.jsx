import { Routes, Route } from "react-router-dom";
import Welcomepages from "./pages/Welcomepages";
import Loginpages from "./pages/Loginpages";
import Registerpages from "./pages/Registerpages";
import Homepages from "./pages/Homepages";
import Wisatapages from "./pages/Wisatapages";

function App() {
  return (
    <>
      {/* <Navbarcomponent /> */}
      <Routes>
        <Route path="/welcome" Component={Welcomepages} />
        <Route path="/login" Component={Loginpages} />
        <Route path="/register" Component={Registerpages} />
        <Route path="/home" Component={Homepages} />
        <Route path="/Wisata" Component={Wisatapages}/>
      </Routes>
      {/* <Footercomponent /> */}
    </>
  );
}

export default App;
