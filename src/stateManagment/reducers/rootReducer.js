import { combineReducers } from "redux";
import { showContactListReducer } from "./showContactListReducer";

const rootReducer = combineReducers({
    contactList:showContactListReducer
});
export default rootReducer;