import { combineReducers } from 'redux';
import { CountriesReducer } from './countries/countries.reducer';

export const rootReducer = combineReducers({
  countries: CountriesReducer,
});
