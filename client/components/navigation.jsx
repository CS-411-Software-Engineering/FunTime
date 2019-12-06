import React, { Component } from 'react';
import {Button, Navbar, Nav, Modal } from 'react-bootstrap';
import "./navigation.css"



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { show:false, setShow:false }
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  
  handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
    this.props.logOut();
  }


  handleShow(){
    console.log("here")
    this.setState({ setShow: true});
  }

  handleClose(){
    this.setState({ setShow: false});
  }

  // componentDidMount () {
  //   this.props.user.map((u) => user.push({
  //     start: new Date(event.start.dateTime),
  //     end: new Date(event.end.dateTime),
  //     title: event.summary,
  //   }))
  //   this.setState({events});
  // }

  /*variant="pills"*/
  render() { 

    return ( 
      <div>
        <Navbar>
          <Nav defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">    </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <style type="text/css">
                {`
                .btn-design {
                  background-color: #ff6c00;
                  color: white;
                }
                `}
              </style>
              <Button variant="design" onClick={this.handleShow}> Profile </Button> 
            </Nav.Item>
            

            <Nav.Item>
              <Nav.Link href="/home">              </Nav.Link>
            </Nav.Item>
            {/* <div className="divider"/> */}

            {/* <Nav.Item> */}
              <p>Welcome to FunTime!</p>
            {/* </Nav.Item> */}
          </Nav>
        </Navbar>
        <Modal show={this.state.setShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src = {this.props.user.imageUrl} class="img-responsive"/>
            <h5>  </h5>
            <h5 class="text-center">First Name: {this.props.user.firstName}</h5>
            <h5 class="text-center">Last Name: {this.props.user.lastName}</h5>
            <h5 class="text-center">Email: {this.props.user.email}</h5>
            <h5 class="text-center">Id: {this.props.user.id}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="design" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant = "design" id="signout_button" onClick= {this.handleSignoutClick}>Sign Out</Button>
          </Modal.Footer>
        </Modal>
      </div>
     );
  }
}
 
export default Navigation;