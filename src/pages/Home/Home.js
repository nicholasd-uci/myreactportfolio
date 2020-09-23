import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap'
import './Carlo'
import Caro from './Carlo'
import Example from './Carlo'
import './style.css'

const Home = () => {
  return (
    <>
      <body className="background">
        <div>
          <Jumbotron className="giphy" fluid body inverse style={{ backgroundColor: '#fffffc', borderColor: '#333'}}>
            <Container fluid>
              <div>
              <img src={require("./myLogo.png")} alt="Photo of me"></img>
              </div>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
          </Jumbotron>
        </div>
        <br/>
        <div>
          {/*  portfolio is going to go here and we will be ale to see our projects along with photo of me  */}
          <CardGroup>
            <Card>
              <CardTitle className="title">Nutraprep: Project I</CardTitle>
              <CardImg top width="100%" src="https://placeimg.com/640/480/nature" alt="Card image cap" />
              <CardBody>
                <CardSubtitle>Nutraprep ~Find out what's in your food ~</CardSubtitle>
                <hr/>
                <CardText>Nutraprep was an app that a team developed using API request using axios to render information about the food we are eating. We wanted to bring to the user a wide variety of meals to consider when cooking as well.</CardText>
                <hr/>
                <Button className="link" href="https://nicholasd-uci.github.io/manhattanProject/" target="_blank" alt="Project 1 link">View Project</Button>
              </CardBody>
            </Card>
            <Card>
              <CardTitle className="title">TrActivity: Project II</CardTitle>
              <CardImg top width="100%" src={require("./myLogo.png")} alt="Card image cap" />
              <CardBody>
                <CardSubtitle>TrActivity ~ Track your spending habit ~</CardSubtitle>
                <hr/>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <hr/>
                <Button className="link" href="https://cryptic-savannah-70126.herokuapp.com/" target="_blank" alt="Porject 2 link">View Project</Button>
              </CardBody>
            </Card>
            <Card>
              <CardTitle className="title">CodeIn: Project III</CardTitle>
              <CardImg top width="100%" src="https://placeimg.com/640/480/nature" alt="Card image cap" />
              <CardBody>
                <CardSubtitle>CodeIn ~ It's as easy as a swipe right ~</CardSubtitle>
                <hr/>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <hr/>
                <Button>View Project</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        
        <Caro className="caro"/>
      </body>
    </> 
  )
}

export default Home