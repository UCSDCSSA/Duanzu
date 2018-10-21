// Import react related components
import React from 'react';
import Sticky from 'react-sticky-el';
// Import UI Components
import {
    Input,
    Button,
    Card,
    Row,
    Col,
    Icon
} from 'react-materialize';
import Header from './Header';
import './styles/image-uploader.scss';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: [],imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();


    let files = e.target.files;
    var file = new Array();
    for (var i = 0; i < files.length; i++){
      file.push(files[i]);
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file[i]);
      console.log(file[i]);
    }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    console.log(this.state);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl}  class="imgPreview"/>);
    } else {
      $imagePreview = (
        <div class="upload-file-camera">
          <i className="material-icons">add_a_photo</i>
          <p> 选择图片 </p>
        </div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>

          <div class="file-input">
            <input className="fileInput" type="file"
              onChange={(e)=>this._handleImageChange(e)} multiple/>
              <div class="file-input-content">
                    <div>
                      {$imagePreview}
                    </div>
              </div>
          </div>

          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
      </div>
    )
  }
}
export default ImageUploader;
