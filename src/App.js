import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

/* eslint-disable no-console, no-param-reassign */

const App = () => (
  <div className="App">
    <Grid className="container">
      <Row>
        <Col md={5} xs={12} className="logo-container">
          <i className="fab fa-fort-awesome fa-lg" style={{ color: 'white' }} />
        </Col>
        <Col md={5} mdOffset={2} xs={12} className="logo-container">
          <i className="fas fa-adjust" style={{ color: 'white' }} />
        </Col>
      </Row>
      <Row>
        <div
          role="presentation"
          style={{ padding: '15px 0px' }}
          onClick={() => {
            const c = 30;
            console.log(c);
          }}
        >
          <img src="https://reactjs.org/logo-og.png" alt="test" />
        </div>
      </Row>
    </Grid>
  </div>
);

export default App;
