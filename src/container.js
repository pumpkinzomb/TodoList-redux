import { connect } from 'react-redux';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'
import { 
    editInput, 
    addList,
    editList, 
    removeList, 
    checkToggle, 
    editState, 
    addState, 
    realignLists_getFid, 
    realignList, 
    realignMode } from './actions';

export const InputForm = connect(
        state =>({
            form:state.form,
            lists:state.lists,
            realignmentMode:state.realignmentMode
        }),
        dispatch => ({
            onEdit(text,color,bolded,formState,id){
                dispatch(editInput(text,color,bolded,formState,id));
            },
            onAdd(id,text,color,bolded){
                dispatch(addList(id,text,color,bolded));
            },
            onEditSubmit(id,text,color,bolded,checked){
                dispatch(editList(id,text,color,bolded,checked));
            },
            onRealignMode(modeState){
                dispatch(realignMode(modeState));
            }
        })

)(Form);
export const TodoLists = connect(
        state =>({
            form:state.form,
            lists:[...state.lists].sort((a,b)=>{
                return b["id"] - a["id"];
            }),
            realignmentMode:state.realignmentMode
        }),
        dispatch => ({
            onEditList(id,text,color,bolded){
                dispatch(editState(id,text,color,bolded))
            },
            onAddList(){
                dispatch(addState())
            },
            onRemoveList(id){
                dispatch(removeList(id))
            },
            onCheckToggle(id,checked){
                dispatch(checkToggle(id,checked))
            },
            onRealign_Fid(fId){
                dispatch(realignLists_getFid(fId))
            },
            onRealignList(fId,lId){
                dispatch(realignList(fId,lId))
            }
        })
)(TodoItemList);
