import React, { Component } from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './preferencesForm.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const sportsCategories = [
  { label: "Baksetball", value: 1 },
  { label: "Baseball", value: 2 },
  { label: "Hockey", value: 3 },
  { label: "Soccer", value: 4 },
];

const musicCategories = [
  { label: "Hip Hop", value: 1 },
  { label: "Rap", value: 2 },
  { label: "Jazz", value: 3 },
  { label: "Country Music", value: 4 },
  { label: "House", value: 5 }
];

const outdoorActivities = [
  { label: "Rock Climbing", value: 1 },
  { label: "Camping", value: 2 },
  { label: "Kayaking", value: 3 },
  { label: "Country Music", value: 4 },
  { label: "House", value: 5 }
];

class PreferencesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPreferences: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    console.log(event)
    this.setState((prevState)=>{
      userPreferences: prevState.userPreferences.push(event[event.length-1].label)
      console.log(this.state.userPreferences)
    })
  };

  handleSubmit(){
    // axios.put('/user/update',userPreferences).then((result)=> {
    // })
    


    console.log("submit triggered")
    this.props.hide()
  }

  render() {
    return (
      <div>
        {/* <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">

            <Select placeholder="sports" options={ sportsCategories } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select placeholder="music" options={ musicCategories } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select placeholder="outdoor" options={ outdoorActivities } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div> */}
      <div className='PeferencesForm'>
        <h4>Choose Your Preference</h4>
        <Select placeholder="sports" options={ sportsCategories } isMulti onChange={this.handleChange} />
        <Select placeholder="music" options={ musicCategories } isMulti onChange={this.handleChange} />
        <Select placeholder="outdoor" options={ outdoorActivities } isMulti onChange={this.handleChange} />
        <div className="PeferencesForm-buttom">
          <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>

    </div>
    );
  }
}

export default PreferencesForm;
