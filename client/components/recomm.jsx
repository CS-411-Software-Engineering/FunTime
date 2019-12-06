import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap';
import './recomm.css';


class Recomm extends Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
    }
    add(){
        
        var start = this.props.dateTime;
        var localDate = new Date(start);
        localDate.setHours(localDate.getHours() + 2);
        var end = localDate.toISOString();
        // console.log(end)
        // console.log(start)
        var event = {
            'summary': this.props.title,
            'start': {
                // 'dateTime': '2019-12-13T20:00:00-07:00'
                'dateTime': start
              },
            'end': {
                'dateTime': end
            }
        }
        var request = window.gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
        request.execute(function(event) {
            console.log("HEREE")
            console.log("EXECUTE event", event);
            // appendPre('Event created: ' + event.htmlLink);
          });
        window.location.reload();
    }
    render(){
        return(
            <Card className = "recomm" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.time}</Card.Subtitle>
                    <Card.Text>
                        {this.props.info}
                    </Card.Text>
                    <style type="text/css">
                        {`
                        .btn-design {
                        background-color: #ff6c00;
                        color: white;
                        }
                        `}
                    </style>
                    <Button variant="design" onClick = {this.add}>Add to Schedule</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Recomm;