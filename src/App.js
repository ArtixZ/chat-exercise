import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap'

import UserInput from './components/UserInput'
import DisplayPane from './components/DisplayPane'
import UserPanel from './components/UserPanel'

import './App.css';
import config from './config'
import { onInpuChange, onMessagePush, onMessagePull } from './actions'

class App extends Component {
  
  render() {

    const { users } = config
    const { msgs, onInpuChange, onMessagePush, onMessagePull } = this.props

    return (
      <Grid style={{height: '100%'}}>
        <Row className="show-grid" style={{height: '100%'}}>
          {users.map( (user, idx) => 
            <UserPanel 
              user={user}
              messages = {msgs[user.id]}

              toUser={users[1-idx]}
              onInpuChange={onInpuChange}
              onMessagePush={onMessagePush}
              onMessagePull={onMessagePull}
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
  onMessagePush,
  onMessagePull,
})(App)
