import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import UserInput from './UserInput'
import DisplayPane from './DisplayPane'
import { registerInputChanging, registerMessageListening } from '../utils'

export default class UserPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputMsg: "",
            typing: false
        }
        this.onChatInput = this.onChatInput.bind(this)
        this.onSendMsg = this.onSendMsg.bind(this)
        this.onTypingReceived = this.onTypingReceived.bind(this)
        this.onMessagePushed = this.onMessagePushed.bind(this)
        
    }

    onChatInput(user, e) {
        const { onInpuChange } = this.props
        onInpuChange(user)
        this.setState({
            inputMsg: e.target.value
        })
    }
    
    onSendMsg(user) {
        const { onMessagePush } = this.props
        const { inputMsg } = this.state
        onMessagePush(user, inputMsg)
    }
    onTypingReceived(data) {
        const { user } = this.props
        if(data.to.id === user.id) {
            this.setState({
                typing: true
            })
            setTimeout(() => {
                this.setState({
                    typing: false
                })
            }, 2000)
        }
        
    }

    onMessagePushed(data) {
        const { user, onMessagePull } = this.props
        if(data.to.id === user.id) {
            onMessagePull(user, data.msg)
        }
    }

    componentDidMount() {
        registerInputChanging(this.onTypingReceived)
        registerMessageListening(this.onMessagePushed)
    }

    render() {

        const { user, toUser, messages } = this.props
        const { typing } = this.state

        return(
            <Col className="chat-column" md={6} sm={6} xs={6} style={{height: '100%'}}>
                <div className="display-title">{user.name}</div>
                <div className="display-pane">
                  <DisplayPane 
                    msgs = {messages}
                  >
                    
                    <div className="typing-status"> 
                        {typing ? `${toUser.name} is typing ...` : null}
                    </div>

                  </DisplayPane>
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