import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import groupAddedMembersStyle from '../../../styles/groupAddedMembersStyles.module.scss';

export const GroupAddedMembers = ({ memberAddedToGroupByUser }) => {
  return (
    <>
      {memberAddedToGroupByUser && memberAddedToGroupByUser.length === 0 ? (
        <div className={groupAddedMembersStyle.showMemberBox}>
          Selected Members will Display Here
        </div>
      ) : (
        <div className={groupAddedMembersStyle.totalProfile}>
          {memberAddedToGroupByUser.map((item) => {
            return (
              <div
                key={item.id}
                className={groupAddedMembersStyle.profileImgAndName}
              >
                <div className={groupAddedMembersStyle.profileImage}>
                  <img src={item.avatar} alt="profileImage" />
                  <div className={groupAddedMembersStyle.checkIcon}>
                    <CheckCircleIcon />
                  </div>
                </div>

                <div className={groupAddedMembersStyle.profileName}>
                  {item.fullName}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
