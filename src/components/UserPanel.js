import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import UserInput from './UserInput'
import DisplayPane from './DisplayPane'
import { socket } from '../utils'

export default class UserPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputMsg: "",
        }
        this.onChatInput = this.onChatInput.bind(this)
        this.onSendMsg = this.onSendMsg.bind(this)
    }

    onChatInput(user, e) {
        const { onInpuChange } = this.props
        onInpuChange(user)
        this.setState({
            inputMsg: e.target.value
        })
    }
    
    onSendMsg(user) {
        const { onMessageChange } = this.props
        const { inputMsg } = this.state
        onMessageChange(user, inputMsg)
    }
    
    componentDidMount() {
        socket.on('changing', function(data) {
            console.log(data)
        })
    }

    render() {

        const { user } = this.props

        return(
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
                    onChatInput={(e) => this.onChatInput(user, e)}
                    onSendMsg={() => this.onSendMsg(user)}
                  />
                </div>
            </Col>
        )
    }
}