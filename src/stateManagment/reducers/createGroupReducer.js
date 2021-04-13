import actionType from '../actions/actionType';
import initialState from '../state/state';

export const createGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_GROUP:
      return {
        ...state,
        groupState: [
          ...state.groupState,
          {
            groupName: action.payload,
          },
        ],
      };

    default:
      return {
        ...state,
      };
  }
};
