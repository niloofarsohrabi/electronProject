import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchResultAction } from '../../../stateManagment/actions/searchResultAction'
//import SearchIcon from '@material-ui/icons/Search';
//import searchStyle from '../../../styles/searchStyle.module.scss'

import TextField from '@material-ui/core/TextField';

export const Search = () => {

    const [userInputForSearch, setUserInputForSearch] = useState();
    const showContactListState = useSelector(state => state.contactList.contactListState);
    const dispatch = useDispatch()

    useEffect(() => {
        let userResultSearch = showContactListState && showContactListState.filter(item => (item.fullName).toLowerCase().includes(userInputForSearch)
        ||(item.workingSide).toLowerCase().includes(userInputForSearch));
        dispatch(searchResultAction(userResultSearch));
    }, [userInputForSearch])


    return (
        <>
            {/* <div className={searchStyle.searchBox}>
               <div className={searchStyle.searchIcon}>
                   <SearchIcon/>
               </div>
               <input placeholder="Search member by name or working side"/>
           </div> */}

            <TextField id="standard-basic" label="Standard" onChange={(event) => setUserInputForSearch(event.target.value)} />

        </>
    )
}
