import React from 'react';
import { AddMember } from '../../services/addMember';
import profileStyle from '../../../styles/profileStyle.module.scss';
import '../../../styles/showMemberGlobalStyle.scss';
export const ShowMember = ({
  memberList,
  whichMemberAddBtnClick,
  whichMemberDeleteBtnClick,
  memberListAdded,
}) => {
  const handleClickOnAddButton = (id) => {
    whichMemberAddBtnClick && whichMemberAddBtnClick(id);
  };
  const handleClickOnDeleteButton = (id) => {
    whichMemberDeleteBtnClick && whichMemberDeleteBtnClick(id);
  };

  const handleIsAdded = (id) => {
    let result = memberListAdded.find((item) => {
      if (item === id) {
        return true;
      } else {
        return false;
      }
    });
    if (result !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      {memberList.length == 0 ? (
        <div className="notFound">
          <p>Oops! No results Found</p>
        </div>
      ) : (
        memberList &&
        memberList.map((item) => {
          return (
            <div key={item.id} className={profileStyle.container}>
              <div className={profileStyle.totalProfile}>
                <div className={profileStyle.totalImg}>
                  <img
                    className={profileStyle.profileImg}
                    src={item.avatar}
                    alt="profileImage"
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

                <AddMember
                  memberId={item.id}
                  clickOnAddButton={handleClickOnAddButton}
                  clickOnDeleteButton={handleClickOnDeleteButton}
                  isAdded={handleIsAdded(item.id)}
                />
              </div>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};
