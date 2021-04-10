import actionType from './actionType';

export const createGroupAction = (name) => {
  // console.log('name action');
  // console.log(name);
  return {
    type: actionType.SHOW_GROUP,
    payload: name,
  };
};
export const addtoobject = (fullname) => {
  return {
    type: 'test',
    payload: fullname,
  };
};
