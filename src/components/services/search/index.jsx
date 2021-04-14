import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../../../styles/searchStyle.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export const Search = ({ userInput }) => {
  const handleInputOfSearch = (event) => {
    userInput(event.target.value);
  };
  return (
    <>
      <div className="textFieldSearch">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search member by name or working side"
          autoComplete="off"
          onChange={(event) => handleInputOfSearch(event)}
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
