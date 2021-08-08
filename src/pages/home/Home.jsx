import React from 'react';
import { useSelector } from 'react-redux';
import CountryList from '../../components/country-list/country-list';
import Loader from '../../components/loader/Loader';
import Search from '../../components/search/search';
import { useFetch } from '../../hooks/useEfetch';
import './home.css';

// const fakedData = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }];

function Home() {
  const { getCountries } = useFetch('https://restcountries.eu/rest/v2');

  const { isLoading } = useSelector(state => state.countries);

  const collectionByName = useSelector(
    ({ countries }) => countries.collectionsFilteredByName
  );

  const collectionsState = useSelector(({ countries: state }) => {
    if (state.filterByRegion && collectionByName.length === 0) {
      return state.collectionsFilteredByRegion;
    }
    if (state.collectionsFilteredByName.length > 0) {
      return state.collectionsFilteredByName;
    }

    return state.collections;
  });
  // console.log(`Im used this collection:`, collectionsState);
  console.log(collectionByName);

  React.useEffect(() => {
    getCountries('all');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main">
      <Search />
      {isLoading ? <Loader /> : <CountryList collection={collectionsState} />}
    </main>
  );
}

export default Home;
