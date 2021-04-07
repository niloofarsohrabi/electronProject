import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showContactListAction } from '../../../stateManagment/actions/showContactListAction'
import { AddMember } from '../../services/addMember'
import { GroupAddedMembers } from '../../services/groupAddedMembers'
import { Search } from '../../services/search'
import TextField from '@material-ui/core/TextField'
import profileStyle from '../../../styles/profileStyle.module.scss'
import '../../../styles/mainPageGlobalStyle.scss'


export const MainPage = () => {

    const showContactListState = useSelector(state => state.contactList.contactListState);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(dispatch(showContactListAction()))
        dispatch(showContactListAction())

    }, []);
    return (
        <>
            <div className="GroupTitleTextBox">
                <TextField id="outlined-search" label="Group Title" type="text" variant="outlined" />
            </div>
            <GroupAddedMembers />
            <Search />
            {
                showContactListState &&
                showContactListState.map((item) => {
                    return (
                        <div className={profileStyle.container}>
                            <div className={profileStyle.totalProfile} key={item.id}>
                                <div className={profileStyle.totalImg}>
                                    <img className={profileStyle.profileImg} src={item.avatar} />
                                    {
                                        item.status === "ONLINE" ?
                                            <div className={profileStyle.onLineStatus}></div> :
                                            <div className={profileStyle.offLineStatus}></div>
                                    }
                                </div>
                                <div className={profileStyle.styleDetail}>
                                    <div className={profileStyle.profileName}>{item.fullName}</div>
                                    <div className={profileStyle.workingSide}>{item.workingSide}</div>
                                </div>
                                <AddMember />
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
            <div className="totalBtn">
                <button className="discardBtn">Discard</button>
                <button className="createBtn">Create</button>
            </div>


        </>
    )
}
