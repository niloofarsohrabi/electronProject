import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showContactListAction } from '../../../stateManagment/actions/showContactListAction'
import profileStyle from '../../../styles/profileStyle.module.scss'


export const MainPage = () => {

    const showContactListState = useSelector(state => state.contactList.contactListState);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(dispatch(showContactListAction()))
        dispatch(showContactListAction())

    }, []);
    return (
        <>
            {
                showContactListState &&
                showContactListState.map((item) => {
                    return (
                        <div>
                            <div className={profileStyle.totalProfile} key={item.id}>
                                <div className={profileStyle.totalImg}>
                                    <img className={profileStyle.profileImg} src={item.avatar} />
                                    {
                                        item.status == "ONLINE" ?
                                            <div className={profileStyle.onLineStatus}></div>:
                                            <div className={profileStyle.offLineStatus}></div>
                                    }
                                </div>
                                <div className={profileStyle.styleDetail}>
                                    <div className={profileStyle.profileName}>{item.fullName}</div>
                                    <div className={profileStyle.workingSide}>{item.workingSide}</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )

                })
            }
        </>
    )
}
