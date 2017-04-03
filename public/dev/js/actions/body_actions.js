import CONST from '../constants/CONSTANTS';

export function setTitles(payload) {
  return {
    type: CONST.UPDATE_TITLES,
    payload
  }
}