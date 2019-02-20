import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

import "./Publish.css";

class Publish extends Component {
  state = {
    files: []
  };

  handleFiles = files => {
    console.log(files);
    const newFiles = [...this.state.files, ...files.base64];
    this.setState({
      files: newFiles
    });
  };

  render() {
    const filesArray = [];
    for (let i = 0; i < this.state.files.length; i++) {
      filesArray.push(
        <img
          key={i}
          onClick={() => {
            const newFiles = [...this.state.files];
            newFiles.splice(i, 1);
            this.setState({
              files: newFiles
            });
          }}
          src={this.state.files[i]}
          alt="Annonce"
        />
      );
    }
    return (
      <div>
        <h1>Publish page</h1>
        <ReactFileReader
          fileTypes={[".png", ".jpg"]}
          base64={true}
          multiplesFiles={true} // false for one single image
          handleFiles={this.handleFiles}
        >
          <span>Choisir des images</span>
        </ReactFileReader>

        {filesArray}
      </div>
    );
  }
}

export default Publish;
