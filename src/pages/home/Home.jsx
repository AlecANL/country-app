import CountryList from '../../components/country-list/country-list';
import Search from '../../components/search/search';
import './home.css';

const fakedData = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }];

function Home() {
  return (
    <main className="main">
      <Search />
      <CountryList collection={fakedData} />
    </main>
  );
}

export default Home;
