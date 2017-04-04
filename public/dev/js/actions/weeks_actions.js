import CONST from '../constants/CONSTANTS';

export function getWeeks(payload) {
  return { 
  	type: CONST.GET_WEEKS_REQUEST, 
  	payload 
  }
}