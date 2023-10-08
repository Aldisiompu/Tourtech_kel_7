import Cardimg from "../assets/welcomeimg.png";
import Card from "react-bootstrap/Card";
const Cardcomponent = () => {
  return (
    <div className="card-container ">
      <Card className="text-center ">
        <Card.Img src={Cardimg} alt="Gambar Card" />
        <Card.Body className="card-body">
          <h2 className="text-white fw-bold">Judul text</h2>
          <p className="text-info">desc</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardcomponent;
