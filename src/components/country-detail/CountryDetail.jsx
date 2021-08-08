import { useHistory } from 'react-router';
import './country-detail.css';

function CountryDetail() {
  const history = useHistory();

  function handleBackHome() {
    history.goBack();
  }
  return (
    <section className="country-description">
      <div className="button" onClick={handleBackHome}>
        <button>
          <span>🠐</span>
          <span>Back</span>
        </button>
      </div>
      <div className="description-content">
        <div className="flag">
          <img src="https://restcountries.eu/data/arg.svg" alt="" />
        </div>
        <div className="description">
          <h1>Country Name</h1>
          <div className="description__details">
            <div className="country-detail">
              <p>
                <strong>Native Name: </strong>
                <span>Belgie</span>
              </p>
              <p>
                <strong>Population: </strong>
                <span>102002</span>
              </p>
              <p>
                <strong>Region: </strong>
                <span>Europe</span>
              </p>
              <p>
                <strong>Sub Region: </strong>
                <span>Wester Wurope</span>
              </p>
              <p>
                <strong>Capital: </strong>
                <span>Bressles</span>
              </p>
            </div>
            <div className="country-detail">
              <p>
                <strong>Top Level Domain: </strong>
                <span>Belgie</span>
              </p>
              <p>
                <strong>Currencies: </strong>
                <span>Belgie</span>
              </p>
              <p>
                <strong>Languages: </strong>
                <span>Belgie</span>
              </p>
            </div>
            <div className="tags">
              <p>Border Countries:</p>
              <ul className="tags-list">
                <li className="tags-list__item">
                  <a href={`/country/Code`}>France</a>
                </li>
                <li className="tags-list__item">
                  <a href={`/country/Code`}>France</a>
                </li>
                <li className="tags-list__item">
                  <a href={`/country/Code`}>France</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
