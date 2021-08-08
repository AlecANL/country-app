import './country-card.css';

function CountryCard({ country }) {
  return (
    <article className="card">
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
