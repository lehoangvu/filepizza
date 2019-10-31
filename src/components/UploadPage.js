import DropZone from './DropZone'
import React from 'react'
import Spinner from './Spinner'
import Tempalink from './Tempalink'
import UploadActions from '../actions/UploadActions'
import UploadStore from '../stores/UploadStore'
import socket from 'filepizza-socket'
import { formatSize } from '../util'

export default class UploadPage extends React.Component {

  constructor() {
    super()
    this.state = UploadStore.getState()

    this._onChange = () => {
      this.setState(UploadStore.getState())
    }

    this.uploadFile = this.uploadFile.bind(this)
  }

  componentDidMount() {
    UploadStore.listen(this._onChange)
  }

  componentWillUnmount() {
    UploadStore.unlisten(this._onChange)
  }

  uploadFile(file) {
    UploadActions.uploadFile(file)
  }

  handleSelectedFile(event) {
    let files = event.target.files
    if (files.length > 0) {
      console.log(files[0])
      if(typeof ga != 'undefined') {
        ga('gtm1.send', 'event', 'Upload', 'select file', files[0].name)
      }
      UploadActions.uploadFile(files[0])
    }
  }

  render() {
    switch (this.state.status) {
      case 'ready':

        return <DropZone onDrop={this.uploadFile}>
          <div className="page">

            <Spinner dir="up" />

            <h1>Ezpic</h1>
            <p>Gửi và nhận file miễn phí</p>
            <small className="notice">File của bạn được gửi trực tiếp đến người nhận, chúng tôi không lưu trữ bất cứ thông tin nào.</small>
            <p>
              <label className="select-file-label">
                <input type="file" onChange={this.handleSelectedFile} required/>
                <span>Chọn file</span>
              </label>
            </p>
          </div>
        </DropZone>

      case 'processing':
        return <div className="page">

          <Spinner dir="up" animated />

          <h1>Ezpic</h1>
          <p>Processing...</p>

        </div>

      case 'uploading':
        return <div className="page">

          <h1>Ezpic</h1>
          <Spinner dir="up" animated
            name={this.state.fileName}
            size={this.state.fileSize} />

          <p>Gửi link cho bạn bè để tải file này về!</p>
          <small className="notice">HÃY GIỮ TRANG NÀY LUÔN MỞ ĐỂ BẠN BÈ CỦA BẠN CÓ THỂ TẢI FILE!</small>
          <p>Peers: {this.state.peers} &middot; Up: {formatSize(this.state.speedUp)}</p>
          <Tempalink token={this.state.token} shortToken={this.state.shortToken} />

        </div>
    }
  }

}
