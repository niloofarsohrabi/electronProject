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
  const [buttonStatus, setButtonStatus] = useState(true);
  const [modal, setModal] = useState();
  const [alert, setAlert] = useState();
  const [groupTitle, setGroupTitle] = useState();
  const [memberAdded, setmemberAdded] = useState([]);
  let memberWereAddedInGroup = [];

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
  const handleAddMember = () => {
    if (memberAdded !== undefined) {
      for (let i = 0; i < copyContactListState.length; i++) {
        for (let j = 0; j < memberAdded.length; j++) {
          if (copyContactListState[i].id === memberAdded[j]) {
            memberWereAddedInGroup.push(copyContactListState[i]);
          }
        }
      }
    }
  };
  //-------------------------- Add Member
  //const state = useSelector((state) => console.log(state));

  const handleCreateButton = () => {
    if (memberAdded.length >= 2) {
      dispatch(createGroupAction(groupTitle, memberWereAddedInGroup));
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
  const handleWhichMemberDeleteIsClick = (memberIdFromDeleteBtn) => {
    if (memberAdded.includes(memberIdFromDeleteBtn)) {
      setmemberAdded((prevState) => {
        if (prevState) {
          let result = [...prevState];
          result.pop(memberIdFromDeleteBtn);
          return result;
        }
      });
    }
  };
  //-------------------------- Remove Button
  const handleDiscardButton = () => {
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
          value={groupTitle}
          onChange={(event) => handleGroupCreate(event)}
        />
      </div>
      <GroupAddedMembers
        memberSelected={handleAddMember()}
        memberAddedToGroupByUser={memberWereAddedInGroup}
      />
      <Search userInput={handleUserInput} />
      <ShowMember
        propsSearchResultState={searchResultState}
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
