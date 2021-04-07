import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import searchStyle from '../../../styles/searchStyle.module.scss'



export const Search = () => {
    return (
        <>
           <div className={searchStyle.searchBox}>
               <div className={searchStyle.searchIcon}>
                   <SearchIcon/>
               </div>
               <input placeholder="Search member by name or working side"/>
                   
             
           </div>
         
        </>
    )
}
