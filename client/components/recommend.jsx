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
    this.setState((prevState)=>{return {currPage: prevState.currPage + 1}});

    //Get more recommendation.
  }

  render() { 
    return ( 
      <div className = "recommend">
        <style type="text/css">
                {`
                .btn-design {
                  background-color: #ff6c00;
                  color: white;
                }
                `}
              </style>
        <Button variant="primary" size="lg" disabled={this.state.currPage === 0} onClick = {this.handlePrev}>
          PrevPage
        </Button>
        <div className="divider"/>
        <Button variant="primary" size="lg" active onClick = {this.handleNext}>
          NextPage
        </Button>
        {this.state.events.slice(this.state.currPage*this.perPage,(this.state.currPage+1)*this.perPage).map((p)=> (<Recomm title = {p.title} time = {p.time} info = {p.info} img = {p.info} add={this.handleSubmit}/>))}
      </div>
    );
  }
}
 
export default Recommend;