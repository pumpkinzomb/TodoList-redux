import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ 
    text="",
    bolded=false,
    checked=false,
    color="color1",
    id=-1, 
    form={},
    onAddList=f=>f,
    onEditList=f=>f,
    onCheckToggle=f=>f, 
    onRemoveList=f=>f}) => {
    return(
        <div className={`todo-item ${(form.formState === "edit" && form.id === id) ? "edit-item" : ""}`} onClick={() => onCheckToggle(id,!checked)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemoveList(id);
            }}> &times; </div>
            <div className={`todo-text ${color} ${checked ? "checked" : ""} ${bolded ? "bold-font" : ""}`}>
                <div>{ text }</div>
            </div>
            {
                checked && (<div className="check-mark">&#x2713;</div>) //checked가 true면 우측 실행, ( 좌측이 true일 경우 )항상 우측이 반환됨
            }
            <div className="edit-btn" onClick={(e) => {
                e.stopPropagation();
                form.formState === "add" ? onEditList(id,text,color,bolded,checked) :
                    form.id === id ? onAddList() : onEditList(id,text,color,bolded,checked);
            }}><img src="imgs/edit.png" alt="edit_pecil_Image" /></div>
        </div>
    )
}

export default TodoItem;
