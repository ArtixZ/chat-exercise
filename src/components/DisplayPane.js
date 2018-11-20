import React, { Component } from 'react'

export default class extends Component {

    render() {
        const { msgs } = this.props

        return(
            <>
                { msgs.map( message => {

                    const { direction, status, msg } = message

                    return (
                        <>
                            {direction==='in'? (<div className="display-msg-in">
                                {msg}
                            </div>) : (<div className="display-msg-out">
                                {msg}
                            </div>)
                            }
                        </>
                    )
                })

                }
                
            </>
        )
    }
}