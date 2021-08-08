import { useDispatch } from 'react-redux';
import {
  loadAllCountries,
  rejectLoadCountries,
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
  return {
    getCountries,
  };
}
