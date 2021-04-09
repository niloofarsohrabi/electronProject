import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchResultAction } from '../../../stateManagment/actions/searchResultAction';
import SearchIcon from '@material-ui/icons/Search';
import '../../../styles/searchStyle.scss';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export const Search = () => {
  const [userInputForSearch, setUserInputForSearch] = useState();
  const showContactListState = useSelector(
    (state) => state.contactList.contactListState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let userResultSearch =
      showContactListState &&
      showContactListState.filter(
        (item) =>
          item.fullName.toLowerCase().includes(userInputForSearch) ||
          item.workingSide.toLowerCase().includes(userInputForSearch),
      );
    dispatch(searchResultAction(userResultSearch));
  }, [userInputForSearch]);

  return (
    <>
      <div className="textFieldSearch">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search Member By Name Or Working Side"
          onChange={(event) => setUserInputForSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};
