import React, { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import addMemberStyle from '../../../styles/addMemberStyle.module.scss';

export const AddMember = ({
  memberId,
  total,
  testlist,
  clickOnAddButton,
  clickOnDeleteButton,
}) => {
  const [addButton, setAddButton] = useState();
  const [deleteButton, setDeleteButton] = useState();
  const handleMember = (id) => {
    clickOnAddButton(id);
    // if (clickOnAddButton) {
    //   setAddButton(true);
    // } else {
    //   setAddButton(false);
    // }
    // console.log(memberId);
  };
  const handleDelete = (id) => {
    clickOnDeleteButton(id);
    // if (clickOnDeleteButton) {
    //   setDeleteButton(true);
    // } else {
    //   setDeleteButton(false);
    // }
  };
  let res = total.filter((item) => item.id === memberId);

  return (
    <>
      {/* {total.map((item) => {
        return <div>{item.id == testlist ? <p>hast</p> : <p>nist</p>}</div>;
      })} */}
      {addButton ? (
        <div>
          <button className={addMemberStyle.btnAdded}>
            <CheckCircleIcon fontSize="small" />
            <span>Added</span>
          </button>
          <button
            className={addMemberStyle.btnDelete}
            onClick={() => handleDelete(memberId)}
          >
            <DeleteIcon fontSize="small" />
            <span>Remove</span>
          </button>
        </div>
      ) : (
        <button
          className={addMemberStyle.btnAdd}
          onClick={() => handleMember(memberId)}
        >
          <PersonAddIcon color="primary" fontSize="small" />
          <span>Add</span>
        </button>
      )}
    </>
  );
};
