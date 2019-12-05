import React, { Component } from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  render() {
    return (
      <div className='mt-5'>
        <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={ sportsCategories } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={ musicCategories } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={ outdoorActivities } isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
    );
  }
}

export default PreferencesForm;
