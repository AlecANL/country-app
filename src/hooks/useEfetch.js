import { useDispatch } from 'react-redux';
import {
  loadAllCountries,
  rejectLoadCountries,
  activeCountry,
} from '../redux/countries/countries.actions';

export function useFetch(apiURL) {
  const dispatch = useDispatch();
  async function getCountries(query) {
    try {
      const response = await fetch(`${apiURL}/${query}`);
      const countries = await response.json();
      dispatch(loadAllCountries(countries));
    } catch (error) {
      dispatch(rejectLoadCountries(error));
      throw new Error('whoops something a wrong');
    }
  }

  async function getCountryByCode(alphaCode) {
    try {
      const response = await fetch(`${apiURL}/${alphaCode}`);
      const country = await response.json();
      dispatch(activeCountry(country));
    } catch (error) {
      throw new Error(error);
    }
  }

  return {
    getCountries,
    getCountryByCode,
  };
}
