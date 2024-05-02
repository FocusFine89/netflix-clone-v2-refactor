import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import TvShows from "./TvShows";
import Home from "./Home";

function TopBar() {
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="./logo.png" alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link">Home</NavLink>
            <NavLink className="nav-link">TV Shows</NavLink>
          </Nav>
          <NavLink className="text-light me-3 " href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </NavLink>
          <NavLink className="text-light me-3" href="#">
            KIDS
          </NavLink>
          <NavLink className="text-light me-3" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </NavLink>
          <div>
            <DropdownButton
              align={{ sm: "end" }}
              title="Profile"
              id="dropdown-menu-align-responsive-1"
              variant="secondary"
              className="d-none d-md-block"
            >
              <Dropdown.Item eventKey="1" href="#profile">
                Profile Settings
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" href="#settings">
                General Settings
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
