import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
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

  render() { 
    return ( 
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <button id="signout_button" onClick= {this.handleSignoutClick}>Sign Out</button>
        </Nav.Item>
      </Nav>
     );
  }
}
 
export default Navigation;