import { combineReducers } from "redux";

import * as reducers from "./reducers";

//-----------------------|| COMBINE REDUCERS ||-----------------------//

const reducer = combineReducers({
  sample: reducers.sampleReducer,
  snackbar: reducers.snackbarReducer,
});

export default reducer;