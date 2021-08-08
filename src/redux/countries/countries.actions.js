import { CountriesTypes } from './countries.types';

export function loadAllCountries(countries) {
  return {
    type: CountriesTypes.GET_COUNTRIES,
    payload: countries,
  };
}

export function rejectLoadCountries(errorDescription) {
  return {
    type: CountriesTypes.ERROR_GET_COUNTRIES,
    payload: errorDescription,
  };
}

export function filterByRegion(region) {
  return {
    type: CountriesTypes.FILTER_BY_REGION,
    payload: region,
  };
}

export function filterByName(name) {
  return {
    type: CountriesTypes.FILTER_BY_NAME,
    payload: name,
  };
}
