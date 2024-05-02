import { Button, Col, Row } from "react-bootstrap";

function FootBar() {
  return (
    <footer className="bg-dark text-secondary d-flex flex-column">
      <Row className="links row">
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Audio and Subtitles
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Audio Description
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Help Center
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Gift Cards
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Media Center
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Investor Relations
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Jobs
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Terms of Use
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Privacy
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Legal Notices
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Cookie Preferences
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Corporate Information
          </p>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className=" my-3 ">
          <p href="#" className="link-secondary">
            Contact Us
          </p>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button
          type="button"
          className="btn btn-dark border border-light d-block text-secondary mb-4 btn-service"
        >
          Service Code
        </Button>
      </div>

      <p className="d-flex justify-content-center">© 1997-2024 Netflix, Inc.</p>
    </footer>
  );
}

export default FootBar;
