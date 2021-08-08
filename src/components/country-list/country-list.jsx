import CountryCard from '../country-card/country-card';
import './country-list.css';

function CountryList({ collection }) {
  return (
    <section className="country-collection">
      {collection.map((country, idx) => (
        <CountryCard key={idx} country={country} />
      ))}
    </section>
  );
}

export default CountryList;
