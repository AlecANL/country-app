import { useHistory } from 'react-router';
import './country-card.css';

function CountryCard({ country }) {
  const history = useHistory();

  function handleDetailCard() {
    history.push(`/country/${country.alpha3Code}`);
  }
  return (
    <article className="card" onClick={handleDetailCard}>
      <div className="card__image">
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className="card-description">
        <p className="country-name">{country.name}</p>
        <div className="card-description__details">
          <p>
            <span className="bold">Population: </span>
            <span>{country.population.toLocaleString('en-Us')}</span>
          </p>
          <p>
            <span className="bold">Region: </span>
            <span>{country.region}</span>
          </p>
          <p>
            <span className="bold">Capital: </span>
            <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
