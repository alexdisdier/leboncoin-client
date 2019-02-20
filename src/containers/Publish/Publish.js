import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import { ReactComponent as PhotoCamera } from "../../assets/img/photo-camera.svg";

import "./Publish.css";

class Publish extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    files: []
  };

  handleFiles = files => {
    const newFiles = [...this.state.files];
    newFiles.push(files.base64);
    this.setState({
      files: newFiles
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { title, description, price } = this.state;

    const filesArray = [];
    for (let i = 0; i < this.state.files.length; i++) {
      filesArray.push(
        <>
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
            alt="annonce"
          />
        </>
      );
    }

    return (
      <div className="wrapper">
        <div className="ad-listing">
          <h1>Déposer une annonce</h1>

          <div className="ad-listing-container">
            <h2>Votre annonce</h2>

            <div className="ad-listing-body">
              <label htmlFor="title">Titre de l'annonce</label>
              <input
                type="text"
                name="title"
                value={title}
                maxLength="50"
                onChange={this.handleChange}
              />
              <label htmlFor="description">Texte de l'annonce</label>
              <textarea
                rows="10"
                name="description"
                value={description}
                maxLength="4000"
                onChange={this.handleChange}
              />
              <label htmlFor="price">Prix</label>
              <input
                type="text"
                name="price"
                value={price}
                maxLength="8"
                onChange={this.handleChange}
              />
              <p>
                <span>Photos :</span> Une annonce avec photo est 7 fois plus
                consultée qu'une annonce sans photo
              </p>
              <aside>
                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multiplesFiles={false} // false for one single image
                  handleFiles={this.handleFiles}
                >
                  <span>
                    {filesArray.length > 0 ? filesArray[0] : "Photo principale"}
                  </span>
                </ReactFileReader>

                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multiplesFiles={false} // false for one single image
                  handleFiles={this.handleFiles}
                >
                  <span>
                    {filesArray.length > 0 ? filesArray[2] : "Photo 2"}
                  </span>
                </ReactFileReader>
                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multiplesFiles={false} // false for one single image
                  handleFiles={this.handleFiles}
                >
                  <span>
                    {filesArray.length > 0 ? filesArray[3] : "Photo 3"}
                  </span>
                </ReactFileReader>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Publish;
