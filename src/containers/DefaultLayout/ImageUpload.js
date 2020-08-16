
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageUpload.css';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

      this.props.imageChange(reader.result);
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl || this.props.imgURL) {
      $imagePreview = (<img style={{'padding': '10px'}} src={this.props.imgURL} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          {$imagePreview}
          <input type="file" id="files" onChange={this._handleImageChange} style={{display:'none'}} />
          <label class="selectImageBtn" for="files">Select Image</label>
          {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
      alert: state.alert,
  }
}

export default connect(mapStateToProps)(ImageUpload);