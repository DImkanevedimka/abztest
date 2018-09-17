import React, { Component } from 'react';
import { Header, Button } from '../../components';
import { LeftBar } from './leftbar';
import { RightBar } from './rightbar';
import { Services } from './Services';
import { Popup } from './popup';
import companyimg1 from '../../img/company_1.png';
import companyimg2 from '../../img/company_2.png';
import companyimg3 from '../../img/company_3.png';
import peopleimg1 from '../../img/people_1.png';
import peopleimg2 from '../../img/people_2.png';
import peopleimg3 from '../../img/people_3.png';
import productimg1 from '../../img/product_1.png';
import productimg2 from '../../img/product_2.png';
import './styles.css';

class Home extends Component {
  state = {
    error: {},
    services: [],
    companies: [
      {
        id: 0,
        title: 'Company Name',
        service: 'Manufacture',
        location: 'Belgrade, Serbia',
        img: companyimg1,
      },
      {
        id: 1,
        title: 'Company Name',
        service: 'Service Provide',
        location: 'New York, USA',
        img: companyimg2,
      },
      {
        id: 2,
        title: 'Company Name',
        service: 'Supplier',
        location: 'London England',
        img: companyimg3,
      },
    ],
    people: [
      {
        id: 0,
        name: 'Dennis Adams',
        service: 'Dentist (Practice Owner)',
        location: 'London, England',
        img: peopleimg1,
      },
      {
        id: 1,
        name: 'Mary Carpenter',
        service: 'Dentist (Practice Owner)',
        location: 'Belgrade, Serbia',
        img: peopleimg2,
      },
      {
        id: 2,
        name: 'Danielle Salazar',
        service: 'Dentist (Practice Owner)',
        location: 'Paris, France',
        img: peopleimg3,
      },
    ],
    products: [
      {
        id: 0,
        name: 'Product Name',
        text: 'Product Short Description The quick brown fox jump over the lazy dog.',
        img: productimg1,
      },
      {
        id: 1,
        name: 'Product Name',
        text: 'Product Short Description The quick brown fox jump over the lazy dog.',
        img: productimg2,
      },
    ],
  };

  componentDidMount() {
    /* global fetch, Headers */
    const url = 'http://504080.com/api/v1/services/categories';
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'a9fdc21fcfa50b9275b604d0d1086341dded1d68',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then((response) => { // eslint-disable-line
        if (response.status === 200) {
          return response.json();
        }
        const error = {
          status: response.status,
          text: response.statusText,
          isError: true,
        };
        this.setState({ error });
      })
      .then((json) => {
        if (json) {
          this.setState({ services: json.data });
        }
      });
  }

  render() {
    const {
      services, people, products, companies, error,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <main>
            <div className="main-inner">
              <LeftBar companies={companies} />
              <div className="main-content">
                <div className="main-content__top">
                  <h2 className="def-h2">Service Directory</h2>
                  <Button text="Add New Service" />
                </div>
                <Services services={services} />
                {error.isError && <Popup errorNumber={error.status} errorText={error.text} />}
              </div>
              <RightBar people={people} products={products} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export { Home };
