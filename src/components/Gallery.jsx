import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
class Gallery extends Component {
  state = {
    gallery: [],
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    },
  };

  getFilm = (nomeFilm) => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6538f3d5&s=" + nomeFilm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Errore nella Richiesta al Server, Riprova più Tardi!"
          );
        }
      })
      .then((response) => {
        this.setState({ gallery: response.Search });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  film = this.props;
  componentDidMount() {
    this.getFilm(this.props.film);
  }
  render() {
    const { titolo } = this.props;
    return (
      <div className="text-white d-flex flex-column justify-content-between mb-5">
        <p className="h1"> {titolo} </p>
        {this.state.gallery.length === 0 && (
          <Spinner animation="border" role="status">
            {" "}
            <span className="visually-hidden">Loading...</span>{" "}
          </Spinner>
        )}
        <Slider {...this.state.settings}>
          {this.state.gallery.map((films) => {
            return (
              <Row key={films.imdbID}>
                <Col>
                  <Card bg="dark" className="text-light">
                    <Card.Img
                      variant="top"
                      src={films.Poster}
                      className="card-image"
                    />
                    <Card.Body>
                      <Card.Title>{films.Title}</Card.Title>
                      <Card.Text>Anno: {films.Year}</Card.Text>
                      <NavLink
                        className="btn btn-info w-100"
                        to={`/tvShows/Dettaglio/${films.Title}`}
                      >
                        Dettaglio
                      </NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
