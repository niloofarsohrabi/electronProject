import actionType from './actionType';

export const createGroupAction = (groupName, members) => {
  return {
    type: actionType.SHOW_GROUP,
    payload: { groupName, members },
  };
};
