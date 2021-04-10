import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddMember } from '../../services/addMember';
import { GroupAddedMembers } from '../../services/groupAddedMembers';
import { Search } from '../../services/search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import profileStyle from '../../../styles/profileStyle.module.scss';
import '../../../styles/mainPageGlobalStyle.scss';
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
  const handleGroupCreate = (event) => {
    if (event.target.value === '') setButtonStatus(true);
    else setButtonStatus(false);

    let nameOfGroupEnteredByUser = event.target.value;
    dispatch(createGroupAction(nameOfGroupEnteredByUser));
  };
  //-------------------------- Button Status

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
      <GroupAddedMembers />
      <Search userInput={handleUserInput} />
      {searchResultState.length == 0 ? (
        <div className="notFound">
          <p>Oops! No results Found</p>
        </div>
      ) : (
        searchResultState &&
        searchResultState.map((item) => {
          return (
            <div key={item.id} className={profileStyle.container}>
              <div className={profileStyle.totalProfile}>
                <div className={profileStyle.totalImg}>
                  <img
                    className={profileStyle.profileImg}
                    src={item.avatar}
                    alt="profileImag"
                  />
                  {item.status === 'ONLINE' ? (
                    <div className={profileStyle.onLineStatus}></div>
                  ) : (
                    <div className={profileStyle.offLineStatus}></div>
                  )}
                </div>
                <div className={profileStyle.styleDetail}>
                  <div className={profileStyle.profileName}>
                    {item.fullName}
                  </div>
                  <div className={profileStyle.workingSide}>
                    {item.workingSide}
                  </div>
                </div>
                <AddMember memberId={item.id} />
              </div>
              <hr />
            </div>
          );
        })
      )}

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
