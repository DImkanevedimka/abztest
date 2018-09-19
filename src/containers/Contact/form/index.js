import React, { Component } from 'react';
import { Img } from './img';
import './styles.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      images: [],
      imagesFiles: [],
      imageValid: true,
      enquiry: [],
      isEnquiry: false,
      isOtherEnquiry: false,
      email: { value: '', valid: false },
      name: { value: '', valid: false },
      enquiryValue: '',
      subjectValue: '',
    };
  }

  componentDidMount() {
    /* global fetch */
    const url = 'http://504080.com/api/v1/directories/enquiry-types';
    return fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => this.setState({
        enquiry: json.data,
        isEnquiry: true,
        enquiryValue: json.data[0].name,
      }));
  }

  onChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'description': {
        if (value.length <= 1000) {
          this.setState({
            description: value,
          });
        }
        break;
      }
      case 'enquiry': {
        if (value === 'Other') {
          this.setState({
            isOtherEnquiry: true,
          });
        } else {
          this.setState({
            enquiryValue: value,
            isOtherEnquiry: false,
          });
        }
        break;
      }
      case 'other': {
        this.setState({
          enquiryValue: value,
        });
        break;
      }
      case 'subject': {
        this.setState({
          subjectValue: value,
        });
        break;
      }
      default:
        break;
    }
  };

  onSubmit = (e) => {
    /* global FormData */
    e.preventDefault();
    const {
      description, email, name, enquiryValue, subjectValue, imagesFiles,
    } = this.state;
    const data = new FormData();
    data.append('department', 1);
    data.append('description', description);
    data.append('email', email.value);
    data.append('enquiry_type', enquiryValue);
    data.append('file', imagesFiles);
    data.append('subject', subjectValue);
    data.append('user_name', name.value);

    return fetch('http://504080.com/api/v1/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }).then(response => console.log(response.json()));
  };

  checkValid = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'email': {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(value) === true) {
          this.setState({
            email: {
              value,
              valid: true,
            },
          });
        } else {
          this.setState({
            email: {
              value,
              valid: false,
            },
          });
        }
        break;
      }
      case 'name': {
        const reg = /([A-Za-z])/;
        if (reg.test(value) === true) {
          this.setState({
            name: {
              value,
              valid: true,
            },
          });
        } else {
          this.setState({
            name: {
              value,
              valid: false,
            },
          });
        }
        break;
      }
      default:
        break;
    }
  };

  addImage = (e) => {
    /* global Image, window */
    const { URL } = window;
    const file = e.target.files[0];
    const { images, imagesFiles } = this.state;
    let img;

    if (file.size < 5000000) {
      const urlImg = URL.createObjectURL(file);

      img = new Image();

      img.onload = (event) => {
        if (event.target.width >= 300 && event.target.height >= 300) {
          images.push(urlImg);
          imagesFiles.push(file);
          this.setState({
            images,
            imagesFiles,
            imageValid: true,
          });
        } else {
          this.setState({
            imageValid: false,
          });
        }
      };
      img.src = URL.createObjectURL(file);
    } else {
      this.setState({
        imageValid: false,
      });
    }
  };

  deleteImage = (e) => {
    const { images, imagesFiles } = this.state;
    const index = e.target.parentNode.dataset.index; // eslint-disable-line
    images.splice(index, 1);
    imagesFiles.splice(index, 1);
    this.setState({
      images,
      imagesFiles,
    });
  };

  render() {
    const {
      description,
      images,
      enquiry,
      isEnquiry,
      isOtherEnquiry,
      email,
      name,
      imageValid,
    } = this.state;
    const optionList = enquiry.map(item => (
      <option key={item.name} value={item.name}>
        {item.name}
      </option>
    ));
    const otherEnquiry = (
      <input
        type="text"
        id="other"
        name="other"
        onChange={this.onChange}
        placeholder="Other"
        className="contacts__input-text contacts__input-other"
        required
      />
    );
    const Images = images.map((item, index) => (
      <Img key={item} url={item} alt="img" index={index} click={this.deleteImage} />
    ));
    return (
      <form action="#" className="contacts-form" onSubmit={this.onSubmit}>
        <div className="contacts-form__inner">
          <div className="contacts__required">Fields marked “*” are required</div>
          <div className="contacts__row">
            <div>
              <label htmlFor="Subject" className="contacts__label">
                Enquiry Type *
              </label>
              {isEnquiry && (
                <select
                  name="enquiry"
                  id="enquiry"
                  className="contacts__select"
                  onChange={this.onChange}
                >
                  {optionList}
                </select>
              )}
              {(!isEnquiry || isOtherEnquiry) && otherEnquiry}
            </div>
          </div>
          <div className="contacts__row contacts__row_d-flex">
            <div
              className={`contacts__input_outer ${
                name.value.length > 0 && !name.valid ? 'no-valid' : ''
              }`}
            >
              <label htmlFor="Name" className="contacts__label">
                Name *
              </label>
              <input
                id="Name"
                name="name"
                type="text"
                onBlur={this.checkValid}
                className="contacts__input-text"
              />
              <span className="no-valid__text">Please enter a valid name!</span>
            </div>
            <div
              className={`contacts__input_outer ${
                email.value.length > 0 && !email.valid ? 'no-valid' : ''
              }`}
            >
              <label htmlFor="Email" className="contacts__label">
                Email *
              </label>
              <input
                id="Email"
                name="email"
                type="text"
                className="contacts__input-text"
                onBlur={this.checkValid}
                required
              />
              <span className="no-valid__text">Please enter a valid Email!</span>
            </div>
          </div>
          <div className="contacts__row">
            <div>
              <label htmlFor="Subject" className="contacts__label">
                Subject *
              </label>
              <input
                id="Subject"
                name="subject"
                type="text"
                onChange={this.onChange}
                className="contacts__input-text"
                required
              />
            </div>
          </div>
          <div className="contacts__row">
            <div>
              <div className="contacts__description-row">
                <label htmlFor="Description" className="contacts__label">
                  Description *
                </label>
                <div>
                  ({description.length}
                  /1000)
                </div>
              </div>
              <textarea
                id="Description"
                type="text"
                name="description"
                className="contacts__textarea"
                onChange={this.onChange}
                value={description}
                required
              />
            </div>
          </div>
          <div className="contacts__row contacts__row_margin-none">
            <div className="contacts__images">
              {Images}
              <label htmlFor="image" className="upload">
                <div className="upload__title">Add Photo</div>
                <div className="upload__description">Minimum size of 300x300 jpeg ipg png 5 MB</div>
                {!imageValid && (
                  <div className="upload__no-valid">The photo does not meet the requirements</div>
                )}
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="contacts__input-file"
                onChange={this.addImage}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="contacts__button_submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export { Form };
