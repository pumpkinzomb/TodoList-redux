import C from "./constants";

export const editInput = (text,color,bolded,formState,id) => ({
    type:C.EDIT_INPUT,
    text,
    color, 
    bolded,
    formState,
    id
})

export const addList = (id,text,color,bolded) =>({
    type:C.ADD_LIST,
    id,
    text,
    color,
    bolded,
    timestamp: new Date().toString()
})
export const removeList = id => ({
    type:C.REMOVE_LIST,
    id
})
export const checkToggle = (id,checked) => ({
    type:C.CHECK_TOGGLE_LIST,
    id,
    checked
})
export const editList = (id,text,color,bolded,checked) => ({
    type:C.EDIT_LIST,
    id,
    text,
    color,
    bolded,
    checked,
    timestamp: new Date().toString()
})

export const addState = () => ({
    type:C.ADD_STATE
})
export const editState = (id,text,color,bolded,checked) => ({
    type:C.EDIT_STATE,
    id,
    text,
    color,
    bolded,
    checked
})

export const realignMode = (modeState) =>({
    type:C.REALIGN_MODE,
    modeState
})
export const realignLists_getFid = (fId) =>({
    type:C.REALIGN_GET_FID,
    fId
})
export const realignList = (fId,lId) =>({
    type:C.REALIGN_LIST,
    fId,
    lId
})
