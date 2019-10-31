import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class TicketMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
    }
  }

  componentDidMount(){
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=gJkuCtIADI4a7ndVXXl3MKezKFtirNFF&city=boston',{
      method: 'GET',
    })
    .then(results => results.json())
    .then(
      (data) => {
        console.log('from fetch', data._embedded.events);
        this.setState({
        events: data._embedded.events
      });
    });
  }


  render() {
    // const {events} = this.state;
    return(
      <div class="Container">
        {this.state.events ? this.state.events.map((event, idx) => {
          return (<div>{event.name}</div>)
        })
        :
        "hello"
        }
      </div>
    )

  }
}

export default TicketMaster;
