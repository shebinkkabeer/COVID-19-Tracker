import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';

import { SocialIcon } from 'react-social-icons';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
                <h1>Select the Country</h1>

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <br></br>
          <br></br>
          <br></br>



          <div className="row>">
          <SocialIcon url="http://instagram.com/shebin_dilz" network="instagram" />
          &nbsp;
          &nbsp;

          <SocialIcon url="http://github.com/shebinkkabeer" network="github" />
          &nbsp;
          &nbsp;


          <SocialIcon url="mailto:shebinkkabeer@gmail.com" network="google" />



          </div>
        </div>
        <div className="container">
          <span className="text-muted">
            Developed by @<span className="text-white">shebin_dilz</span> 
          </span>
        </div>
      </footer>

      </div>

    );
  }
}

export default App;
