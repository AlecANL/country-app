import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useFetch } from '../../hooks/useEfetch';
import { unsetActiveCountry } from '../../redux/countries/countries.actions';
import Loader from '../loader/Loader';
import './country-detail.css';

function CountryDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { getCountryByCode } = useFetch('https://restcountries.eu/rest/v2');
  const countryDetail = useSelector(state => state.countries.activeCountry);

  function handleBackHome() {
    history.goBack();
    dispatch(unsetActiveCountry());
  }

  React.useEffect(() => {
    getCountryByCode(`alpha/${id.toLowerCase()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!countryDetail) return <Loader />;
  console.log(countryDetail);

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
          <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
        </div>
        <div className="description">
          <h1>{countryDetail.name}</h1>
          <div className="description__details">
            <div className="country-detail">
              <p>
                <strong>Native Name: </strong>
                <span>{countryDetail.nativeName}</span>
              </p>
              <p>
                <strong>Population: </strong>
                <span>{countryDetail.population.toLocaleString('en-Us')}</span>
              </p>
              <p>
                <strong>Region: </strong>
                <span>{countryDetail.region}</span>
              </p>
              <p>
                <strong>Sub Region: </strong>
                <span>{countryDetail.subregion}</span>
              </p>
              <p>
                <strong>Capital: </strong>
                <span>{countryDetail.capital}</span>
              </p>
            </div>
            <div className="country-detail">
              <p>
                <strong>Top Level Domain: </strong>
                <span>{countryDetail.topLevelDomain[0]}</span>
              </p>
              <p>
                <strong>Currencies: </strong>
                <span>{countryDetail.currencies[0]['name']}</span>
              </p>
              <p>
                <strong>Languages: </strong>
                {countryDetail.languages.map((language, idx) => (
                  <span key={idx}>{language.name} </span>
                ))}
              </p>
            </div>
            {countryDetail.borders.length > 0 ? (
              <BorderCountry listBorders={countryDetail.borders} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function BorderCountry({ listBorders }) {
  return (
    <div className="tags">
      <p>Border Countries:</p>
      <ul className="tags-list">
        {listBorders.map((border, idx) => (
          <li key={idx} className="tags-list__item">
            <a href={`/country/${border}`}>{border}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetail;
