import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GroupAddedMembers } from '../../services/groupAddedMembers';
import { Search } from '../../services/search';
import { ShowMember } from '../../services/showMember';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createGroupAction } from '../../../stateManagment/actions/createGroupAction';

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
  const [groupTitle, setGroupTitle] = useState();
  const [memberAdded, setmemberAdded] = useState([]);

  const handleGroupCreate = (event) => {
    if (event.target.value === '') setButtonStatus(true);
    else setButtonStatus(false);
    setGroupTitle(event.target.value);
  };

  //-------------------------- Add Member

  return (
    <>
      <div className="GroupTitleTextBox">
        <TextField
          id="outlined-search"
          label="Group Title"
          type="text"
          variant="outlined"
          onChange={(event) => handleGroupCreate(event)}
        />
      </div>
      <GroupAddedMembers memberAddInGroup={memberAdded} />
      <Search userInput={handleUserInput} />
      <ShowMember propsSearchResultState={searchResultState} />
      <div className="totalButton">
        <Button variant="outlined" color="primary">
          Discard
        </Button>
        <Button variant="contained" color="primary" disabled={buttonStatus}>
          Create
        </Button>
      </div>
    </>
  );
};
