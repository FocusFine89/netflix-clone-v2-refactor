import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FootBar from "./components/FootBar";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilePage from "./components/ProfilePage";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  render() {
    return (
      <div className="App text-light overflow-x-hidden">
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvShows" element={<TvShows />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route
              path="/tvShows/Dettaglio/:filmId"
              element={<MovieDetails />}
            />
          </Routes>
        </BrowserRouter>
        <FootBar />
      </div>
    );
  }
}

export default App;
