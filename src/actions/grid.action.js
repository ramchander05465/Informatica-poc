import {GRIDINFO, ADDUSER, EDITUSER, DELETEUSER} from './action.type'

export const getGridInfo = (gridInfo) => {
    return {
      type:GRIDINFO,
      gridInfo
    }
}

export const addUserInfo = (info) => {
    return {
        type:ADDUSER,
        info
    }
}

export const editUserInfo = (info) => {
    return {
        type:EDITUSER,
        info
    }
}

export const deleteUserInfo = (info) => {
    console.log(info)
    return {
        type:DELETEUSER,
        info
    }
}