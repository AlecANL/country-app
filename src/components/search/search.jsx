import React from 'react';
import './search.css';

const countriesToOptions = [
  {
    id: 1,
    name: 'africa',
  },
  {
    id: 2,
    name: 'america',
  },
  {
    id: 3,
    name: 'asia',
  },
  {
    id: 4,
    name: 'europe',
  },
  {
    id: 5,
    name: 'oceania',
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
  const [countryName, setCountryName] = React.useState('');
  const searchFieldRef = React.useRef(null);

  function handleSearchFieldChange() {
    setCountryName(searchFieldRef.current.value);
  }

  return (
    <form className="search-form">
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
  const [isShowOptions, setShowOptions] = React.useState(false);

  const classNameOption = isShowOptions
    ? 'select-list is-active'
    : 'select-list';

  function handleShowOptions() {
    setShowOptions(!isShowOptions);
  }

  return (
    <div className="select" onClick={handleShowOptions}>
      <div className="select-button">
        <span>Filter by region</span>
      </div>
      <ul className={classNameOption}>
        {listOptions.map(option => (
          <li className="select-item" key={option.id}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
