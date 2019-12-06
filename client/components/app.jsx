import React, { Component } from 'react';
import {Row, Col, Container, Spinner} from 'react-bootstrap';
import Calendar from './calendar.jsx';
import Recommend from './recommend.jsx';
import Search from './search.jsx';
import Navigation from './navigation.jsx';
import Login from './login.jsx';
import PreferencesForm from './preferencesForm.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      events: [],
      user: {},
      first: true
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.updateUserPref = this.updateUserPref.bind(this);
    this.success = this.success.bind(this);
  }

  success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    const updatedUserInfo = this.state.user;
    updatedUserInfo.location = [crd.latitude, crd.longitude];
    this.setState({user: updatedUserInfo});
  }

  logIn(data, user) {
    let events = data.events
    console.log('events:', events)
    console.log('user:', user);
    axios.post(`/user/verify`, { ...user })
    .then((result) => {
      console.log("RETRUN value from user email get:", result)
      if(result.data.first) {
        user.first = true;
      } else {
        user.first = false;
        
      }
      axios.get(`/user/preference/${user.email}`)
        .then((preferences) => {
          console.log("PREFERENCES:", preferences);
          user.pref = preferences.data.pref;
          this.setState({signedIn: true, events, user}, () => {
    
            const options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            };
    
            function error(err) {
              console.warn(`ERROR(${err.code}): ${err.message}`);
            };
    
            navigator.geolocation.getCurrentPosition(this.success, error, options);
          })
        })
      
    })
  }

  logOut() {
    this.setState({signedIn: false})
  }

  updateUserPref(pref = []) {
    const updatedUser = this.state.user;
    updatedUser.pref = pref;
    this.setState({user: updatedUser});
  }


  render() { 
    {return this.state.signedIn 
      ? ( 
        <Container>
          <header>
            <Row style={{marginTop: "50px", height: "100%"}}>
              <Col sm={8}><Search /></Col>
              <Col sm={4}><Navigation logOut={this.logOut} user = {this.state.user} updateUserPref = {this.updateUserPref} /></Col>
            </Row>
          </header>
          <Row>
            <Col sm={8}><Calendar events = {this.state.events} user = {this.state.user} updateUserPref = {this.updateUserPref} /></Col>
            {this.state.user.location 
              ? <Col sm={4}><Recommend location = {this.state.user.location} pref = {this.state.user.pref}/></Col>
              : (<>
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                </>)}
          </Row>
        </Container>
       )
      : <Login logIn = { this.logIn } logOut = { this.logOut } />
    }
  }
}

export default App;
