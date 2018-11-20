import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap'

import UserInput from './components/UserInput'
import DisplayPane from './components/DisplayPane'

import './App.css';
import config from './config'

class App extends Component {

  render() {

    const { users } = config

    return (
      <Grid style={{height: '100%'}}>
        <Row className="show-grid" style={{height: '100%'}}>
          {users.map( user => {

            return (
              <Col className="chat-column" md={6} sm={6} xs={6} style={{height: '100%'}}>
                <div className="display-title">{user.name}</div>
                <div className="display-pane">
                  <DisplayPane 
                    msgs = {[{
                      direction: 'out',
                      status: 'sent',
                      msg: 'first test message.........',
                    }, {
                      direction: 'in',
                      status: 'sent',
                      msg: 'second test message...............',
                    }]}
                  />
                </div>
                <div className="user-input">
                  <UserInput 
                  />
                </div>
              </Col>
            )
          })}
          
        </Row>
      </Grid>
    );
  }
}

export default App;
