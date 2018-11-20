import React, { Component } from 'react'

export default class extends Component {

    render() {
        const { 
            onChatInput, 
            onSendMsg 
        } = this.props
        return (
            <div class="input-group mb-3">
                <input onChange={onChatInput} type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button onClick={onSendMsg} class="btn btn-outline-secondary" type="button">Submit</button>
                </div>
            </div>
        )
    }
}

