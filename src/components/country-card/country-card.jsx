import './country-card.css';

function CountryCard() {
  return (
    <article className="card">
      <div className="card__image">
        <img src="https://restcountries.eu/data/usa.svg" alt="" />
      </div>
      <div className="card-description">
        <p className="country-name">United States of Americaaaaaaaaaaa</p>
        <div className="card-description__details">
          <p>
            <span className="bold">Population</span>
            <span>323,947,000</span>
          </p>
          <p>
            <span className="bold">Region</span>
            <span>Americas</span>
          </p>
          <p>
            <span className="bold">Capital</span>
            <span>Washintong, D.C.</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
