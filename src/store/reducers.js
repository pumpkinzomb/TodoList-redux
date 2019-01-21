import C from '../actions/constants';
import update from 'react-addons-update';

export const form = (input={},action) => {
    switch (action.type){
        case C.EDIT_INPUT:
            return{
                text:action.text,
                bolded:action.bolded,
                color:action.color,
                formState:action.formState,
                id:action.id,
                checked:action.checked
            }
        case C.ADD_STATE:
            return{
                text:"",
                bolded:false,
                color:"color1",
                formState:"add",
                id:-1,
                checked:false
            }
        case C.EDIT_STATE:
            return{
                text:action.text,
                bolded:action.bolded,
                color:action.color,
                formState:"edit",
                id:action.id,
                checked:action.checked
            }
        default :
            return input
    }
}


export const list = (list={},action) => {
    switch (action.type) {
        case C.ADD_LIST:
            return{
                id:action.id,
                text:action.text,
                bolded:action.bolded,
                color:action.color,
                timestamp:action.timestamp,
                checked:false
            }
        case C.EDIT_LIST:
            return (list.id !== action.id) ? 
                list :
                {
                    ...list,
                    text:action.text,
                    checked:action.checked,
                    bolded:action.bolded,
                    color:action.color,
                    timestamp:action.timestamp
                }
        case C.CHECK_TOGGLE_LIST:
            return (list.id !== action.id) ? 
            list :
            {
                ...list,
                checked:action.checked
            }
        default :
            return list
    }
}

export const lists = (lists=[],action) => {
    switch (action.type){
        case C.ADD_LIST :
            return update(
                lists,{$push:[list({},action)]}
            )
        case C.CHECK_TOGGLE_LIST :
            return lists.map(
                todo => list(todo,action)
            )
        case C.EDIT_LIST :
            return lists.map(
                todo => list(todo,action)
            )
        case C.REMOVE_LIST :
            return [...lists].filter(
                list => list.id !== action.id
            ).map((list,i) => {
                list.id = i;
                return list;
            })
        case C.REALIGN_LIST :
            const getFirst = lists.findIndex(list => list.id === action.fId);
            const getLast = lists.findIndex(list => list.id === action.lId);
            const selectFrom = lists[getFirst];
            const newList = [...lists];
            newList.splice(getFirst,1); //잘라서
            newList.splice(getLast,0,selectFrom); //붙인다
            return newList.map((list,i) => {
                list.id = i;
                return list;
            })
        default:
            return lists
    }
}

export const realignmentMode = (realignmentMode={},action) => {
    switch (action.type) {
        case C.REALIGN_MODE :
            return {
                modeState:action.modeState,
                fId:-1,
                lId:-1
            }
        case C.REALIGN_GET_FID :
            return {
                modeState:true,
                fId:action.fId,
                lId:-1
            }
        default :
            return realignmentMode
    }
}

