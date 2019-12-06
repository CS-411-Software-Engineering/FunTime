import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Recomm from './recomm.jsx';
import './recommend.css';
import axios from 'axios';

class Recommend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currPage: 0,
      events:[
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"}
    ] }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.perPage = 3;
  }

  componentDidMount() {
    this.handleNext();
  }
  //When the user click the add bottom on the event, add this event to user's calender.
  handleSubmit(){

  }

  //Prev Page, set the current page number to be the previous page
  handlePrev(){
    //decrease current page num
    this.setState((prevState)=>{return {currPage: prevState.currPage - 1}});
  }

  //load next page, get more recommendation.
  handleNext(){
    //increase current page num
    // axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&latlong=${this.props.location[0]},${this.props.location[1]}&apikey=FbaXAVqFDDUUKd927p9yMFZHEbBB5v9J&page=${this.state.currPage}&size=3`)
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&latlong=42.3510016,-71.1090176&apikey=FbaXAVqFDDUUKd927p9yMFZHEbBB5v9J&page=${this.state.currPage}&size=3`)
    .then(result => {
      console.log("recoomedation result", result);
      const newEvent = result.data._embedded.events.map((event) => {
        return {title: event.name, distance: event.distance, time: event.dates.start.localDate + " " + event.dates.start.localTime, img: event.images[0].url, info: event.info} 
      })
      this.setState((prevState)=>{return {currPage: prevState.currPage + 1, events: newEvent}});
    })

    //Get more recommendation.
  }

  render() { 
    return ( 
      <div className = "recommend">
        <Button variant="primary" size="lg" disabled={this.state.currPage === 0} onClick = {this.handlePrev}>
          PrevPage
        </Button>
        <div className="divider"/>
        <Button variant="primary" size="lg" active onClick = {this.handleNext}>
          NextPage
        </Button>
        {this.state.events.map((event)=> (<Recomm title = {event.title} time = {event.time} info = {event.info} img = {event.img} add={this.handleSubmit}/>))}
      </div>
    );
  }
}
 
export default Recommend;