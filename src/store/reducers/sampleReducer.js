import {
    SOME_ACTION
  } from "../actions";
  //-----------------------|| COST CENTER REDUCER ||-----------------------//
  
  // constant
  const initialState = {
    sample:true
  };
  
  const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case SOME_ACTION: {
        return {
          ...state,
          cost_center_details: action.payload,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export { sampleReducer };