import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // console.log('action received: ', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // NEVER EVER mutate state i.e. DO NOT use .push. .concat is ok because concat returns a NEW array with everything from the old array inside.
      // return state.concat([ action.payload.data ]); this is the same as this:
      return [ action.payload.data, ...state ];
      // new record is returned at 0 index
  }
  return state;
}
