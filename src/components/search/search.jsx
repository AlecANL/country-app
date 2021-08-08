import React from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByName,
  filterByRegion,
} from '../../redux/countries/countries.actions';
import './search.css';

const countriesToOptions = [
  {
    id: 1,
    name: 'Africa',
  },
  {
    id: 2,
    name: 'Americas',
  },
  {
    id: 3,
    name: 'Asia',
  },
  {
    id: 4,
    name: 'Europe',
  },
  {
    id: 5,
    name: 'Oceania',
  },
];

function Search() {
  return (
    <section className="search">
      <SearchField />
      <SearchOption listOptions={countriesToOptions} />
    </section>
  );
}

function SearchField() {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = React.useState('');
  const searchFieldRef = React.useRef(null);

  function handleSearchFieldChange() {
    setCountryName(searchFieldRef.current.value);
    dispatch(filterByName(countryName));
    console.log(countryName);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterByName(countryName));

    console.log(countryName);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <img
        src={`${process.env.PUBLIC_URL}/icon-search.svg`}
        alt="icon search"
      />
      <input
        className="search-field"
        value={countryName}
        ref={searchFieldRef}
        onChange={handleSearchFieldChange}
        type="search"
        placeholder="Search for a country..."
      />
    </form>
  );
}

function SearchOption({ listOptions }) {
  const dispatch = useDispatch();
  const [isShowOptions, setShowOptions] = React.useState(false);

  const classNameOption = isShowOptions
    ? 'select-list is-active'
    : 'select-list';

  function handleShowOptions() {
    setShowOptions(!isShowOptions);
  }

  function handleFilterByRegion(tag) {
    dispatch(filterByRegion(tag));
  }

  return (
    <div className="select" onClick={handleShowOptions}>
      <div className="select-button">
        <span>Filter by region</span>
      </div>
      <ul className={classNameOption}>
        {listOptions.map(option => (
          <li
            onClick={() => handleFilterByRegion(option.name)}
            className="select-item"
            key={option.id}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
