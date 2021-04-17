import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import addMemberStyle from '../../../styles/addMemberStyle.module.scss';

export const AddMember = ({
  memberId,
  clickOnAddButton,
  clickOnDeleteButton,
  isAdded,
}) => {
  const handleMember = (id) => {
    clickOnAddButton(id);
  };
  const handleDelete = (id) => {
    clickOnDeleteButton(id);
  };

  return (
    <>
      {isAdded && isAdded ? (
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
