import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

function ProfilePage() {
  return (
    <Container className="text-light main">
      <h1>Edit Profile</h1>
      <hr className="text-secondary" />
      <Row className="edit-profile-container d-flex">
        <Col sm={2}>
          <img src="./avatar.png" alt="" className="image-profile" />
        </Col>
        <Col className="edit-profile" sm={10}>
          <p className="bg-secondary py-3 px-3 h3">Strive Student</p>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Language
            </Dropdown.Toggle>

            <Dropdown.Menu data-bs-theme="dark">
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Klingon</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Vulcan</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <div className="maturity-settings">
            <h3>Maturity Settings:</h3>
            <Button type="button" className="btn btn-secondary my-3">
              ALL MATURITY RATINGS
            </Button>
            <p>Show titles of all maturity ratings for this profile</p>
            <Button
              type="button"
              className="btn btn-outline-secondary btn-lg px-5 py-2"
              disabled
            >
              Edit
            </Button>
            <hr />
            <div className="autoplay">
              <h3>Autoplay controls</h3>
              <div className="check-group">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" value={"1"} checked />
                  Autoplay next episode in a series on all devices.{" "}
                  <span></span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" value={"2"} />
                  previews while browsing on all devices. <span></span>
                </label>
              </div>
            </div>
          </div>
        </Col>
        <hr />
        <Row className="btn-contanier">
          <Col sm={3}>
            <Button type="button" className="btn btn-outline-light btn-save">
              Save
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              type="button"
              className="btn btn-outline-light btn-cancel bg-secondary"
            >
              Cancel
            </Button>
          </Col>
          <Col sm={6}>
            <Button
              type="button"
              className="btn btn-outline-light btn-delete bg-danger"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default ProfilePage;
