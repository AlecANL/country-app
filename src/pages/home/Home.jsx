import CountryList from '../../components/country-list/country-list';
import Search from '../../components/search/search';

const fakedData = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }];

function Home() {
  return (
    <main>
      <Search />
      <CountryList collection={fakedData} />
    </main>
  );
}

export default Home;
