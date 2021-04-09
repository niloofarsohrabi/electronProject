import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddMember } from '../../services/addMember';
import { GroupAddedMembers } from '../../services/groupAddedMembers';
import { Search } from '../../services/search';
import { searchResultAction } from '../../../stateManagment/actions/searchResultAction';
import TextField from '@material-ui/core/TextField';
import profileStyle from '../../../styles/profileStyle.module.scss';
import Button from '@material-ui/core/Button';
import '../../../styles/mainPageGlobalStyle.scss';

export const MainPage = () => {
  const dispatch = useDispatch();
  const showSearchResult = useSelector(
    (state) => state.searchResult.searchResultState,
  );
  const copyContactListState = useSelector(
    (state) => state.contactList.contactListState,
  );
  useEffect(() => {
    dispatch(searchResultAction(copyContactListState));
  }, [copyContactListState]);

  return (
    <>
      <div className="GroupTitleTextBox">
        <TextField
          id="outlined-search"
          label="Group Title"
          type="text"
          variant="outlined"
        />
      </div>
      <GroupAddedMembers />
      <Search />

      {showSearchResult.length == 0 ? (
        <div className="notFound">
          <p>No results Found</p>
        </div>
      ) : (
        showSearchResult &&
        showSearchResult.map((item) => {
          return (
            <div key={item.id} className={profileStyle.container}>
              <div className={profileStyle.totalProfile}>
                <div className={profileStyle.totalImg}>
                  <img className={profileStyle.profileImg} src={item.avatar} />
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
                <AddMember />
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
        <Button variant="contained" color="primary">
          Create
        </Button>
      </div>
    </>
  );
};
