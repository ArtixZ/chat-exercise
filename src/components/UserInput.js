import React, { Component } from 'react'

export default class extends Component {

    render() {
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Submit</button>
                </div>
            </div>
        )
    }
}

