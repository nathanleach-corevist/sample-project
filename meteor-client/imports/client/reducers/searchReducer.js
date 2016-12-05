import { Map } from 'immutable';
import { SET_PURCHASING_SEARCH_FILTER, SET_INVOICING_SEARCH_FILTER } from '../actions';

const initialState = Map({ purchasingSelectedOpt: 'SOLD_TO', invoicingSelectedOpt: 'PAYER_NUMBER'})

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_PURCHASING_SEARCH_FILTER:
      return state.set('purchasingSelectedOpt', action.filter)
    case SET_INVOICING_SEARCH_FILTER:
      return state.set('invoicingSelectedOpt', action.filter)
    default:
      return state
  }
}

export default searchReducer;
