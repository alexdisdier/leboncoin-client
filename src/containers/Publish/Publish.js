import React, { Component } from "react";
import axios from "axios";
import ReactFileReader from "react-file-reader";
import Loading from "../../components/Loading/Loading";
import domain from "../../assets/domain";
import { ReactComponent as PhotoCamera } from "../../assets/img/photo-camera.svg";

import "./Publish.css";

class Publish extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    files: [],

    isLoading: false,
    error: null
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

  submitForm = async event => {
    event.preventDefault();
    try {
      const { title, description, price, files } = this.state;
      console.log(files);
      const token = this.props.getUser().token;
      this.setState({
        isLoading: true
      });
      await axios.post(
        `${domain}/publish`,
        {
          title: title,
          description: description,
          pictures: files, // to change for pictures
          price: Number(price)
        },
        {
          headers: {
            authorization: "Bearer " + token
          }
        }
      );
      this.setState({
        isLoading: false
      });
      // console.log("response.data", response.data);
      this.props.history.push("/leboncoin-client/offres");
    } catch (error) {
      console.log({
        error: error.message,
        specific: "The ad was not published"
      });
    }
  };

  renderButton = () => {
    if (!this.state.isLoading) {
      return <button className="validate-btn">Valider</button>;
    } else {
      return (
        <>
          <Loading />
          <span className="loading-message">
            Une fois le chargement terminé, vous serez rediriger vers la page
            d'accueil. merci de patienter 😃{" "}
          </span>
        </>
      );
    }
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
            <form onSubmit={this.submitForm}>
              <div className="ad-listing-body">
                <label htmlFor="title">Titre de l'annonce</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  maxLength="50"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="description">Texte de l'annonce</label>
                <textarea
                  rows="10"
                  name="description"
                  value={description}
                  maxLength="4000"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="price">Prix</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  maxLength="8"
                  onChange={this.handleChange}
                  required
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
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray.length > 0
                        ? filesArray[0]
                        : "Photo principale"}
                    </div>
                  </ReactFileReader>

                  <ReactFileReader
                    fileTypes={[".png", ".jpg"]}
                    base64={true}
                    multiplesFiles={false} // false for one single image
                    handleFiles={this.handleFiles}
                  >
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray[1] ? filesArray[1] : "Photo 2"}
                    </div>
                  </ReactFileReader>

                  <ReactFileReader
                    fileTypes={[".png", ".jpg"]}
                    base64={true}
                    multiplesFiles={false} // false for one single image
                    handleFiles={this.handleFiles}
                  >
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray[2] ? filesArray[2] : "Photo 3"}
                    </div>
                  </ReactFileReader>
                </aside>
                {this.renderButton()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Publish;
