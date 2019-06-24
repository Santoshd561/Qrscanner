import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class Test extends Component {
    render() {
        return (
            <div>
                <QrReader

                    onError={(err) => {
                        alert('errror')
                        console.log()
                    }}
                    onScan={(res) => {
                        alert('success')
                        console.log(res)
                    }}
                    legacyMode
                />
                {/* <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
                <p>{this.state.result}</p>
            </div>
        )
    }
}