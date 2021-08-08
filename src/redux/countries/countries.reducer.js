import { CountriesTypes } from './countries.types';

const initialState = {
  collections: [],
  collectionsFilteredByRegion: [],
  collectionsFilteredByName: [],
  filterByRegion: null,
  isError: null,
  isLoading: true,
  error: null,
};

export function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    case CountriesTypes.GET_COUNTRIES:
      return {
        ...state,
        collections: [...action.payload],
        isLoading: false,
      };
    case CountriesTypes.ERROR_GET_COUNTRIES:
      return {
        ...state,
        isError: true,
        isLoading: true,
        error: action.payload,
      };
    case CountriesTypes.FILTER_BY_REGION: {
      const filterRegion = state.collections.filter(country => {
        return country.region === action.payload;
      });
      return {
        ...state,
        collectionsFilteredByRegion: [...filterRegion],
        filterByRegion: action.payload,
      };
    }

    case CountriesTypes.FILTER_BY_NAME: {
      let listCollections = [];
      if (state.filterByRegion) {
        listCollections = state.collectionsFilteredByRegion;
      } else {
        listCollections = state.collections;
      }
      const filteredByName = listCollections.filter(country => {
        return country.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        collectionsFilteredByName: [...filteredByName],
      };
    }

    default:
      return {
        ...state,
      };
  }
}
