import React, { Component } from 'react';
import axios from 'axios';
import ReactFileReader from 'react-file-reader';
import Loading from '../../components/Loading/Loading';
import domain from '../../assets/domain';

import { ROUTE_PUBLISH, ROUTE_OFFERS } from '../../constant/routes';

import './Publish.css';

class Publish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      price: '',
      files: [],

      isLoading: false,
    };
  }

  handleFiles = (files) => {
    const { files: stateFiles } = this.state;
    const newFiles = [...stateFiles];
    newFiles.push(files.base64);
    this.setState({
      files: newFiles,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm = async (event) => {
    const {
      title, description, price, files,
    } = this.state;
    const { getUser } = this.props;

    event.preventDefault();
    try {
      const { token } = getUser();
      const { history } = this.props;
      this.setState({
        isLoading: true,
      });
      await axios.post(
        domain + ROUTE_PUBLISH,
        {
          title,
          description,
          pictures: files, // to change for pictures
          price: Number(price),
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      this.setState({
        isLoading: false,
      });
      history.push(ROUTE_OFFERS);
    } catch (error) {
      console.error({
        error: error.message,
        specific: 'The ad was not published',
      });
    }
  };

  renderButton = () => {
    const { isLoading } = this.state;

    if (!isLoading) {
      return (
        <button type="button" className="validate-btn">
          Valider
        </button>
      );
    }
    return (
      <>
        <Loading />
        <span data-testid="loading" className="loading-message">
          Une fois le chargement terminé, vous serez rediriger vers la page
          d&quot;accueil. merci de patienter
          <span role="img" aria-label="smily face">
            😃
          </span>
        </span>
      </>
    );
  };

  render() {
    const {
      title, description, price, files,
    } = this.state;

    const imageOnClick = (i) => {
      const newFiles = [...files];
      newFiles.splice(i, 1);
      this.setState({
        files: newFiles,
      });
    };

    const filesArray = [];
    for (let i = 0; i < files.length; i += 1) {
      filesArray.push(
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <img
          data-testid="image"
          key={i}
          // wrap image in a button which will take the event listener
          onClick={() => imageOnClick(i)}
          src={files[i]}
          alt="annonce"
        />,
      );
    }

    return (
      <div className="wrapper">
        <div className="ad-listing">
          <h1>Déposer une annonce</h1>

          <div className="ad-listing-container">
            <h2>Votre annonce</h2>
            <form data-testid="submit-form" onSubmit={this.submitForm}>
              <div className="ad-listing-body">
                <label htmlFor="title">Titre de l&apos;annonce</label>
                <input
                  id="title"
                  data-testid="input-title"
                  type="text"
                  name="title"
                  value={title}
                  maxLength="50"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="description">Texte de l&apos;annonce</label>
                <textarea
                  id="description"
                  data-testid="textarea-description"
                  rows="10"
                  name="description"
                  value={description}
                  maxLength="4000"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="price">Prix</label>
                <input
                  id="price"
                  data-testid="input-price"
                  type="text"
                  name="price"
                  value={price}
                  maxLength="8"
                  onChange={this.handleChange}
                  required
                />
                <p>
                  <span>Photos :</span>
                  {' '}
                  Une annonce avec photo est 7 fois plus
                  consultée qu&quot;une annonce sans photo
                </p>
                <aside>
                  <ReactFileReader
                    fileTypes={['.png', '.jpg']}
                    base64
                    multiplesFiles={false} // false for one single image
                    handleFiles={this.handleFiles}
                  >
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray.length > 0
                        ? filesArray[0]
                        : 'Photo principale'}
                    </div>
                  </ReactFileReader>

                  <ReactFileReader
                    fileTypes={['.png', '.jpg']}
                    base64
                    multiplesFiles={false} // false for one single image
                    handleFiles={this.handleFiles}
                  >
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray[1] ? filesArray[1] : 'Photo 2'}
                    </div>
                  </ReactFileReader>

                  <ReactFileReader
                    fileTypes={['.png', '.jpg']}
                    base64
                    multiplesFiles={false} // false for one single image
                    handleFiles={this.handleFiles}
                  >
                    <div className="box-photo">
                      {/* <span className="close-photo">⤫</span> */}
                      {filesArray[2] ? filesArray[2] : 'Photo 3'}
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
