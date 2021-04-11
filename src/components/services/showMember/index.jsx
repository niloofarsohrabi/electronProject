import React from 'react';
import { AddMember } from '../../services/addMember';
import profileStyle from '../../../styles/profileStyle.module.scss';
import '../../../styles/mainPageGlobalStyle.scss';
export const ShowMember = ({ propsSearchResultState }) => {
  return (
    <div>
      {/* {' '} */}
      {propsSearchResultState.length == 0 ? (
        <div className="notFound">
          <p>Oops! No results Found</p>
        </div>
      ) : (
        propsSearchResultState &&
        propsSearchResultState.map((item) => {
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
                <AddMember />
              </div>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};
