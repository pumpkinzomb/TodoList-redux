import React from "react";
import "./css/RealignmentItem.css"

const RealignmentItem = ({ 
    text="", 
    id=-1, 
    color="color1", 
    bolded=false, 
    checked=false, 
    realignmentMode={}, 
    onRealign_Fid=f=>f,
    onRealignList=f=>f, }) => {
    let r_checked = realignmentMode.fId === id;
    const realignList = (fId,lId) =>{
        if(fId!==lId){
            onRealignList(fId,lId);
        }
        onRealign_Fid(-1);
    }
    return(
        <div className={`realignment-item  ${r_checked ? "r_checked" : ""}`} 
            onClick={()=>{
                realignmentMode.fId<0 ? onRealign_Fid(id) : 
                realignList(realignmentMode.fId,id)
            }}>
            <div className="realignment-btn">{r_checked ? (<img src="imgs/realignment_checked.png" alt="edit_pecil_Image" />) : (<img src="imgs/realignment.png" alt="edit_pecil_Image" />) }</div>
            <div className= {`realignment-text ${color} ${checked ? "checked" : ""} ${bolded ? "bold-font" : ""}`} >
                <div>{ text }</div>
            </div>
        </div>
    );
}

export default RealignmentItem;