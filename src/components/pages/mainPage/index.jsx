import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GroupAddedMembers } from '../../services/groupAddedMembers';
import { Search } from '../../services/search';
import { ShowMember } from '../../services/showMember';
import { ModalComponent } from '../../baseComponent/modal';
import { createGroupAction } from '../../../stateManagment/actions/createGroupAction';
import TextField from '@material-ui/core/TextField';
import { AlertComponent } from '../../baseComponent/alert';
import Button from '@material-ui/core/Button';

export const MainPage = () => {
  const dispatch = useDispatch();
  const [searchResultState, setSearchResultState] = useState([]);
  const [userInputForSearch, setUserInputForSearch] = useState();
  const copyContactListState = useSelector(
    (state) => state.contactList.contactListState,
  );

  useEffect(() => {
    setSearchResultState(copyContactListState);
  }, [copyContactListState]);

  const handleUserInput = (input) => {
    setUserInputForSearch(input);
  };
  useEffect(() => {
    if (userInputForSearch !== undefined) {
      let userResultSearch =
        copyContactListState &&
        copyContactListState.filter((item) => {
          return (
            item.fullName.toLowerCase().includes(userInputForSearch) ||
            item.workingSide.toLowerCase().includes(userInputForSearch)
          );
        });
      setSearchResultState(userResultSearch);
    }
  }, [userInputForSearch]);
  //-------------------------- handle Search

  //-------------------------- Add Member
  const [buttonStatus, setButtonStatus] = useState(true);
  const [modal, setModal] = useState();
  const [alert, setAlert] = useState();
  const [groupTitle, setGroupTitle] = useState();
  const [memberAdded, setmemberAdded] = useState([]);

  const handleGroupCreate = (event) => {
    if (event.target.value === '') setButtonStatus(true);
    else setButtonStatus(false);
    setGroupTitle(event.target.value);
  };
  const handleWhichMemberIsClicked = (memberIdFromClickAddButton) => {
    if (memberAdded.includes(memberIdFromClickAddButton)) {
      console.log('The User Is Added');
    } else {
      setmemberAdded((prevState) => {
        if (prevState) {
          let result = [...prevState];
          result.push(memberIdFromClickAddButton);
          return result;
        }
      });
    }
  };
  const getAddedMembers = () => {
    const addedMembers = [];
    if (memberAdded !== undefined) {
      for (let i = 0; i < copyContactListState.length; i++) {
        for (let j = 0; j < memberAdded.length; j++) {
          if (copyContactListState[i].id === memberAdded[j]) {
            addedMembers.push(copyContactListState[i]);
          }
        }
      }
    }
    return addedMembers;
  };
  //-------------------------- Add Member

  //-------------------------- Create Button
  // const state = useSelector((state) => console.log(state));

  const handleCreateButton = () => {
    if (memberAdded.length >= 2) {
      dispatch(createGroupAction(groupTitle, getAddedMembers()));
      setButtonStatus(true);
      setAlert(true);
      setmemberAdded([]);
      setGroupTitle('');
    } else {
      setModal(true);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleCloseAlert = () => {
    setAlert(false);
  };
  //-------------------------- Create Button

  //-------------------------- Remove Button
  const handleWhichMemberDeleteIsClick = (memberIdFromDeleteBtn) => {
    if (memberAdded.includes(memberIdFromDeleteBtn)) {
      let result = memberAdded.filter((item) => item !== memberIdFromDeleteBtn);
      setmemberAdded(result);
    }
  };

  //-------------------------- Remove Button

  //-------------------------- discard button
  const handleDiscardButton = () => {
    setButtonStatus(true);
    setmemberAdded([]);
    setGroupTitle('');
  };
  //-------------------------- discard button

  return (
    <>
      <div className="GroupTitleTextBox">
        <ModalComponent showModalOrNot={modal} close={handleCloseModal} />
        {alert && (
          <AlertComponent
            showAlertOrNot={alert}
            closeAlert={handleCloseAlert}
          />
        )}
        <TextField
          id="outlined-search"
          label="Group Title"
          type="text"
          variant="outlined"
          autoComplete="off"
          value={groupTitle}
          onChange={(event) => handleGroupCreate(event)}
        />
      </div>
      <GroupAddedMembers membersToShow={getAddedMembers()} />
      <Search userInput={handleUserInput} />
      <ShowMember
        memberList={searchResultState}
        whichMemberAddBtnClick={handleWhichMemberIsClicked}
        whichMemberDeleteBtnClick={handleWhichMemberDeleteIsClick}
        memberListAdded={memberAdded}
      />
      <div className="totalButton">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleDiscardButton()}
        >
          Discard
        </Button>
        <Button
          onClick={() => handleCreateButton()}
          variant="contained"
          color="primary"
          disabled={buttonStatus}
        >
          Create
        </Button>
      </div>
    </>
  );
};
