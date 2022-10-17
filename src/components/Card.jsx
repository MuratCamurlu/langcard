import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helper/data";
const Card = () => {
  return (
    <Container className="rounded-3 mt-4 p-2" style={{ background: "orange" }}>
      <h1 className="text-light my-4">Language</h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
