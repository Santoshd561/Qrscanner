import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 500,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
        this.openImageDialog = this.openImageDialog.bind(this)
    }
    componentDidMount() {
        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {
                    video: true
                },
                function (localMediaStream) {
                    console.log('localMediaStream')
                    console.log(localMediaStream)
                },
                function (err) {
                    alert('The following error occurred when trying to access the camera: ' + err);
                }
            );
        } else {
            alert('Sorry, browser does not support camera access');
        }
    }
    handleScan(result) {
        if (result) {
            this.setState({ result })
        }
    }
    handleError(err) {
        console.error(err)
    }
    openImageDialog() {
        this.refs.qrReader1.openImageDialog()
    }

    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }

        return (
            <div>
                <QrReader
                    ref={(stream) => { this.videoStream = stream }}
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode
                />
                <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
                <p>{this.state.result}</p>
            </div>
        )
    }
}