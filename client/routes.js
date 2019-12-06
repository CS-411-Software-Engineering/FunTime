import React from 'react';
import { Router, Route } from 'react-router';
import { preferencesForm } from './preferencesForm.jsx'

const createRoutes = () => (
    <Router>
      <Route exact path="/form" component={ preferencesForm }/>
    </Router>
);

export default createRoutes;
