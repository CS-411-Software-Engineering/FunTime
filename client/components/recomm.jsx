import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap';

class Recomm extends Component{
    constructor(props) {
        super(props);
        this.state = {events:[]  };
    }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.time}</Card.Subtitle>
                    <Card.Text>
                        {this.props.info}
                    </Card.Text>
                    <Button variant="primary">Add to Schedule</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Recomm;