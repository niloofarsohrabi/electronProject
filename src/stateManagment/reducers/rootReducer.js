import { combineReducers } from "redux";
import { searchResultReducer } from "./searchResultReducer";
import { showContactListReducer } from "./showContactListReducer";

const rootReducer = combineReducers({
    contactList:showContactListReducer,
    searchResult:searchResultReducer
});
export default rootReducer;