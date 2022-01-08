import { combineReducers } from "redux";

import * as reducers from "./reducers";

//-----------------------|| COMBINE REDUCERS ||-----------------------//

const reducer = combineReducers({
  sample: reducers.sampleReducer,
});

export default reducer;