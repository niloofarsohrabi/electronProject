import React, { useEffect, useState, useLayoutEffect } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import groupAddedMembersStyle from '../../../styles/groupAddedMembersStyles.module.scss';

export const GroupAddedMembers = ({ membersToShow }) => {
  const [width, setWidth] = useState();
  const [extraNumberOfMemberState, setExtraNumberOfMemberState] = useState();
  const [showMemberState, setShowMemberState] = useState([]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    let numberOfElementFitOnPage = Math.floor(width / (80 + 20) - 1);
    // console.log(numberOfElementFitOnPage);
    if (membersToShow.length > numberOfElementFitOnPage) {
      let extraNumber = membersToShow.length - numberOfElementFitOnPage;
      //  console.log(extraNumber);
      setExtraNumberOfMemberState(extraNumber);
    }
    if (numberOfElementFitOnPage > membersToShow.length) {
      setExtraNumberOfMemberState(undefined);
    }
    setShowMemberState(membersToShow.slice(0, numberOfElementFitOnPage));
  }, [width, membersToShow]);

  return (
    <>
      {showMemberState && showMemberState.length === 0 ? (
        <div className={groupAddedMembersStyle.showMemberBox}>
          Selected Members will Display Here
        </div>
      ) : (
        <div className={groupAddedMembersStyle.totalProfile}>
          {showMemberState.map((item) => {
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

          {extraNumberOfMemberState === undefined ? null : (
            <div className={groupAddedMembersStyle.extraNumber}>
              <span>+{extraNumberOfMemberState}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
