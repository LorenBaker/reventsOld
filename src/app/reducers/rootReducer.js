import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer.jsx";
import modalsReducer from "../../features/modals/modalReducer.jsx";
import authReducer from '../../features/auth/authReducer.jsx'

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalsReducer,
  auth: authReducer
});

export default rootReducer;
