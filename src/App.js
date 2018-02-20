import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import './App.css';

/* eslint-disable no-console, no-param-reassign */

const App = () => (
  <div className="App">
    <div>
      Some Header
    </div>
    <Grid className="container">
      <Row>
        <Col md={5} sm={12} className="logo-container">
          <i className="fab fa-fort-awesome fa-lg" style={{ color: 'white' }} />
        </Col>
        <Col md={5} mdOffset={2} sm={12} className="logo-container">
          <i className="fas fa-adjust" style={{ color: 'white' }} />
        </Col>
        <Col md={5} sm={12} className="logo-container" style={{ height: 60 }}>
          <div>Some content</div>
        </Col>
        <Col md={5} mdOffset={2} sm={12} className="logo-container">
          <i className="fas fa-adjust" style={{ color: 'white' }} />
        </Col>
      </Row>
      <Row md={12}>
        <div
          role="presentation"
          style={{ padding: '15px 0px', width: '100%' }}
          onClick={() => {
            const c = 30;
            console.log(c);
          }}
        >
          <img src="https://reactjs.org/logo-og.png" alt="test" style={{ width: '100%' }} />
        </div>
      </Row>

    </Grid>
    <br />
    <Clearfix style={{ backgroundColor: 'lightBlue' }}>
      <div className="btn btn-secondary fa-pull-left">
        floated left
      </div>
      <div className="btn btn-secondary fa-pull-right">
        floated right
      </div>
    </Clearfix>
    <span>test</span>
  </div>
);

export default App;
