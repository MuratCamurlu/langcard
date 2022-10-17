import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="card p-3 rounded-4 h-100"
      onClick={() => setShowDesc(!showDesc)}
    >
      {!showDesc && (
        <Container>
          <Image className="logo" src={img} width="70%"></Image>
          <h3>{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ul className="h-100">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
