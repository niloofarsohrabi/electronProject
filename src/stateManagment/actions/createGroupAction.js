import actionType from './actionType';

export const createGroupAction = (groupName, member) => {
  return {
    type: actionType.SHOW_GROUP,
    payload: { groupName, member },
  };
};
