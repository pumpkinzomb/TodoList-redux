import React from "react";
import TodoItem from "./TodoItem"
import RealignmentItem from "./RealignmentItem"

const TodoItemList = ({ 
    form={},
    lists=[],
    realignmentMode={},
    onEditList = f=>f, 
    onAddList = f=>f,
    onRemoveList = f=>f, 
    onCheckToggle = f=>f,
    onRealign_Fid = f=>f,
    onRealignList = f=>f }) => {
    return (
        <div>
            {
                lists.map(list => (
                    realignmentMode.modeState === false ? 
                    <TodoItem 
                        form = {form}
                        {...list}
                        onRemoveList={onRemoveList}
                        onAddList={onAddList}
                        onEditList={onEditList}
                        onCheckToggle={onCheckToggle}
                        key={list.id}
                    /> :
                    <RealignmentItem 
                        {...list} 
                        key={list.id}
                        realignmentMode={realignmentMode}
                        onRealign_Fid={onRealign_Fid}
                        onRealignList={onRealignList}
                    />
                ))
            }
        </div>
    )
}

export default TodoItemList;