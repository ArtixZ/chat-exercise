import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap'

import UserInput from './components/UserInput'
import DisplayPane from './components/DisplayPane'
import UserPanel from './components/UserPanel'

import './App.css';
import config from './config'
import { onInpuChange, onMessageChange } from './actions'

class App extends Component {
  
  render() {

    const { users } = config

    return (
      <Grid style={{height: '100%'}}>
        <Row className="show-grid" style={{height: '100%'}}>
          {users.map( user => 
            <UserPanel 
              user={user}
              onInpuChange={onInpuChange}
              onMessageChange={onMessageChange}
            />
          )}
          
        </Row>
      </Grid>
    );
  }
}

const mapStatToProps = (state) => {
  return {
    msgs: state.messages
  }
}

export default connect(mapStatToProps, {
  onInpuChange,
  onMessageChange,
})(App)
