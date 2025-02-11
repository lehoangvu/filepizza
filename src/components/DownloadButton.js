import React from 'react'

export default class DownloadButton extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.props.onClick(e)
    if(typeof ga != 'undefined') {
      ga('gtm1.send', 'event', 'Upload', 'download file', '')
    }
  }

  render() {
    return <button
      className="download-button"
      onClick={this.onClick}>
      Download
    </button>
  }

}

DownloadButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
}
