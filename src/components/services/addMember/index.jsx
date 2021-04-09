import React from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import addMemberStyle from '../../../styles/addMemberStyle.module.scss'

export const AddMember = () => {
    return (
        <>
                <button className={addMemberStyle.btnAdd}>
                    <PersonAddIcon color="primary" fontSize="small" />
                    <span>Add</span>
                </button>
           
        </>
    )
}
