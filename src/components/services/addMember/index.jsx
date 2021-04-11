import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import addMemberStyle from '../../../styles/addMemberStyle.module.scss';
import { addtoobject } from '../../../stateManagment/actions/createGroupAction';

export const AddMember = ({ memberId, clickOnAddButton }) => {
  const contactListState = useSelector(
    (state) => state.contactList.contactListState,
  );
  const handleMember = (id) => {
    clickOnAddButton(id);
  };
  return (
    <>
      <button
        className={addMemberStyle.btnAdd}
        onClick={() => handleMember(memberId)}
      >
        <PersonAddIcon color="primary" fontSize="small" />
        <span>Add</span>
      </button>
    </>
  );
};
