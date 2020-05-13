import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Icon, TablerIcons } from "react-tabler-icons";

const icons = Object.keys(TablerIcons).map(x => (

  <div key={x} className="icon-list-item">
    <Icon name={x} />
  </div>
  )
);

const iconComponents = Object.keys(TablerIcons).map(x => (
  <div key={x} className="icon-list-item">
    {React.createElement(TablerIcons[x])}
  </div>
  )
);

const App = () => {
  return (
    <Container>
      <h2 className="page-title mt-5 mb-3">React Tabler Icons</h2>
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Header>
              Tabler Icons - Using Icon Component
            </Card.Header>
            <Card.Body>
              <Col xs={12}>
                <div className="icon-list-container">
                  {iconComponents}
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Header>
              Tabler Icons - Using Individual Component
            </Card.Header>
            <Card.Body>
              <Col xs={12}>
                <div className="icon-list-container">
                  {icons}
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>      
    </Container>
  );
}

export default App
