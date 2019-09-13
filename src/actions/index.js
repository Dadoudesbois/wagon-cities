// TODO: add and export your own actions
import cities from '../data/cities';

export default function selectCity(city) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
