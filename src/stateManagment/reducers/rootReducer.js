import { combineReducers } from 'redux';
import { createGroupReducer } from './createGroupReducer';
import { showContactListReducer } from './showContactListReducer';

const rootReducer = combineReducers({
  contactList: showContactListReducer,
  createGroup: createGroupReducer,
});
export default rootReducer;
