import React, { Component } from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap';
import "../../public/navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
    this.props.logOut();
  }

  /*variant="pills"*/
  render() { 

    return ( 
      <div>
        <Navbar>
          {/*<style type="text/css">
            {`
            .nav-link.active {
              background-color: #ff6c00;
              color: white;
            }
            `}
          </style>*/}
          <Nav defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
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
              <Button variant = "design" id="signout_button" onClick= {this.handleSignoutClick}>Sign Out</Button>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
     );
  }
}
 
export default Navigation;