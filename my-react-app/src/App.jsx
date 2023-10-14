import { Routes, Route } from "react-router-dom";
import Welcomepages from "./pages/Welcomepages";
import Loginpages from "./pages/Loginpages";
import Registerpages from "./pages/Registerpages";
import Homepages from "./pages/Homepages";
import Wisatapages from "./pages/Wisatapages";
import WisatapagesA from "./pages/WisatapagesA";
import WisatapagesS from "./pages/WisatapagesS";
import Editakunpages from "./pages/Editakunpages";
import Akunsayapages from "./pages/Akunsayapages";
function App() {
  return (
    <>
      {/* <Navbarcomponent /> */}
      <Routes>
        <Route path="/" Component={Welcomepages} />
        <Route path="/login" Component={Loginpages} />
        <Route path="/register" Component={Registerpages} />
        <Route path="/home" Component={Homepages} />
        <Route path="/wisata" Component={Wisatapages}/>
        <Route path="/wisataS" Component={WisatapagesS}/>
        <Route path="wisataA" Component={WisatapagesA}/>
        <Route path="/edit" Component={Editakunpages}/>
        <Route path="/akunsaya" Component={Akunsayapages}/>
      </Routes>
      {/* <Footercomponent /> */}
    </>
  );
}

export default App;
