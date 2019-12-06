import React, { Component } from 'react';
import {Row, Col, InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import Recomm from './recomm.jsx';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      searchResults: null,
      userInput: null,
      results: [],
      haveResult: false,
      showModal: false
    },
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onHide = this.onHide.bind(this)
  }
  onHide() {
        console.log("triggered")
        this.setState({showModal: false});
  }
  componentDidMount() {
    // let ticketMasterLink = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=FbaXAVqFDDUUKd927p9yMFZHEbBB5v9J&'
    // let endPoint = ticketMasterLink.concat('keyword=', this.state.userInput, '&city=Boston', '&size=20')
    // fetch(endPoint, {
    //   method: 'GET',
    // })
    // // .then(results => results.json())
    // .then(
    //   (result) => {
    //     // console.log('event from fetch', data)
    //     // this.setState({
    //     //   results: data
    //     // })
    //     let eventArray = []
    //     result.data._embedded.events.map((event) => {
    //       eventArray.push({title: event.name, url:event.url})
    //     }
    //     )
    //     console.log(eventArray)
    //   }
    // )
  }
  handleChange(event){
    this.setState({userInput: event.target.value});
  }

  handleSubmit(){
    let ticketMasterLink = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=FbaXAVqFDDUUKd927p9yMFZHEbBB5v9J&'
    let endPoint = ticketMasterLink.concat('keyword=', this.state.userInput, '&city=Boston', '&size=20')
    fetch(endPoint, {
      method: 'GET',
    })
    .then(results => results.json())
    .then(
      (result) => {
        // console.log('event from fetch', data)
        // this.setState({
        //   results: data
        // })
        // console.log('result',result)
        const newEvent = result._embedded.events.map((event) => {
          return {title: event.name, distance: event.distance, time: event.dates.start.localDate + " " + event.dates.start.localTime, img: event.images[0].url, info: event.info} 
        })
        this.setState({results: newEvent, 
          haveResult:true, 
          showModal:true});
        // this.state.haveResult = true
        // this.state.showModal = true
        console.log(newEvent)
        
        // console.log('eventArray', eventArray)
      }
    )
    
  }

  render() { 
    return ( 
        <InputGroup className="mb-3">
          <FormControl
            placeholder="SEARCH"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange = {this.handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleSubmit} >Submit</Button>
          </InputGroup.Append>

          {this.state.haveResult
          ?    
          <Modal
            show={this.state.showModal}
            backdrop = 'static'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Here are your search Results
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.results.map((event)=> (<Recomm key={Math.random()} title = {event.title} time = {event.time} info = {event.info} img = {event.img} add={this.handleSubmit}/>))}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
            {/* <Button onClick={this.onHide}>Close</Button> */}
          </Modal.Footer>
      </Modal>
        :null}

        </InputGroup>
    );
  }
}
 
export default Search;