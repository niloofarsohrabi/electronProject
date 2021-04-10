import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import addMemberStyle from '../../../styles/addMemberStyle.module.scss';
import { addtoobject } from '../../../stateManagment/actions/createGroupAction';

export const AddMember = ({ memberId }) => {
  const contactListState = useSelector(
    (state) => state.contactList.contactListState,
  );
  const dispatch = useDispatch();
  const handleMember = (id) => {
    let res =
      contactListState &&
      contactListState.find((item) =>
        console.log(item.id == contactListState.id),
      );
    //console.log(res);
    // dispatch(addtoobject(res.fullName));
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
