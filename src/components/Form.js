import React from "react";
import "./css/Form.css"
import Palette from "./Palette"

const Form = ({
    onEdit = f=>f,
    onAdd = f=>f,
    onEditSubmit = f=>f,
    form={},
    lists={},
    realignmentMode={},
    input={
        id:form.id,
        text:form.text,
        bolded:form.bolded,
        color:form.color,
        formState:form.formState,
        checked:form.checked
    },
    onRealignMode=f=>f
}) => {
    let _inputText;
    const onChange = (e) => {
        input.text = e.target.value;
    }
    const submit = (e) => {
        e.preventDefault();
        if(input.text.length < 1){
            return;
        }
        if(form.formState === "add"){
            let addId = lists.length;
            onAdd(addId,input.text,input.color,input.bolded);
        }else{
            onEditSubmit(input.id,input.text,input.color,input.bolded,input.checked);
        }
        onEdit("","color1",false,"add",0);
        _inputText.value = "";
        _inputText.className = "";
        _inputText.focus();
    }
    const toggleRealignMode = () =>{
        onRealignMode(!realignmentMode.modeState);
    }
    if(form.formState === "edit"){
        // 더 좋은방법이 생각나지 않아서 일단 이렇게 작성해 둠.
        (()=>{ 
            setTimeout(()=>{
                _inputText.value = input.text;
            },1);
        })()
    }else{
        (()=>{ 
            setTimeout(()=>{
                _inputText.focus();
            },1);
        })()
    }
    return(
        <div className="todo-form">
            <div className="palette-with-btns">
                <div className="sort-btn"><img src="imgs/list_sort2.png" alt="Rearrange list button" onClick={toggleRealignMode} /></div>
                <Palette input={input} onEdit={onEdit} />
            </div>
            {
                form.formState === "add" ? 
                <AddForm 
                    onChange={onChange} 
                    input={input}
                    submit={submit} 
                    _inputText={input => { _inputText = input}} /> :
                <EditForm 
                    onChange={onChange} 
                    input={input}
                    _inputText={input => { _inputText = input}}
                    submit={submit} />
            }
        </div>
     )
}

const AddForm = ({
    onChange,
    submit,
    input,
    _inputText
}) =>{
    return(
        <form className="form" 
            onSubmit={submit}>
            <input 
                onChange={onChange} 
                className={`${input.color} ${input.bolded ? "bold-font" : ""}`} 
                ref={_inputText}
            />
            <button className="create-button">추가</button>
        </form>
    )
};
const EditForm = ({
    onChange,
    input,
    submit,
    _inputText
}) => {
    return( 
        <form className="form" onSubmit={submit}>
            <input 
                onChange={onChange} 
                className={`${input.color} ${input.bolded ? "bold-font" : ""}`}
                ref = {_inputText}   
             />
            <button className="edit-button">수정</button>
        </form>
    )
};


export default Form;