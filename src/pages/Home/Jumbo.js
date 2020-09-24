import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = () => {
  return (
    <div>
      <Jumbotron className="giphy" fluid body inverse style={{ backgroundColor: '#fffffc', borderColor: '#333'}}>
            <Container fluid>
              <div>
              <img src={require("./myLogo.png")} alt="Photo of me"></img>
              </div>
              <p className="lead">Mastering how to make tomorrow better by choice 💻</p>
            </Container>
          </Jumbotron>
    </div>
  )
}

export default Jumbo