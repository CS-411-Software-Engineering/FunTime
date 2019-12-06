import React, { Component } from 'react';
import moment, { calendarFormat } from 'moment';
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar';
require('react-big-calendar/lib/css/react-big-calendar.css');
import './calendar.css'
import PreferencesForm from './preferencesForm.jsx';
import { Modal, Button } from 'react-bootstrap';

// Calendar weekly view start with today
var d = new Date();
var n = d.getDay();
moment.locale('en',{
  week:{
    dow : n
  }
});

const localizer = momentLocalizer(moment);


class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {events:[], showModal: false  };
    this.hidePrefModal = this.hidePrefModal.bind(this);
  }

  componentDidMount () {
    const events = []
    this.props.events.map((event) => events.push({
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime),
      title: event.summary,
    }))
    console.log('prop', this.props)
    if(this.props.user.first) {
      this.setState({events, showModal: true})
    } else {
      this.setState({events});
    }
  }

  hidePrefModal() {
    this.setState({showModal: false});
  }


  render() {
    return (

      <div>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          defaultView='week'
          views = {['week']}
          />
        <Modal
          show={this.state.showModal}
          backdrop = 'static'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size = 'sm'

        >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Select your preferences
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PreferencesForm hidePrefModal = {this.hidePrefModal} email = { this.props.user.email }/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hidePrefModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
     );
  }
}

export default MyCalendar;
