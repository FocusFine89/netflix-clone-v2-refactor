import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);

  const [film, setFilm] = useState("");

  const getFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=6538f3d5&i=" + params.filmId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setFilm(response);
        console.log(film);
      });
  };

  useEffect(() => {
    if (params) {
      getFetch();
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={film.Poster} />
            <Card.Body>
              <Card.Text className="h4">{film.Title}</Card.Text>
              <Card.Text>
                Anno: <Badge bg="info">{film.Released}</Badge>
              </Card.Text>
              <Card.Text>
                Tipologia: <Badge bg="info">{film.Type}</Badge>
              </Card.Text>
              <Card.Text>
                imbdID Rating : <Badge bg="info">{film.imdbRating}</Badge>
              </Card.Text>
              <Card.Text>
                Language : <Badge bg="info">{film.Language}</Badge>
              </Card.Text>
              <Card.Text>
                Runtime : <Badge bg="info">{film.Runtime}</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
