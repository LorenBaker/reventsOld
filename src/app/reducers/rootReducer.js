import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer.jsx";
import modalsReducer from "../../features/modals/modalReducer.jsx";
import authReducer from "../../features/auth/authReducer.jsx";
import asyncReducer from "../../features/async/asyncReducer.jsx";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
