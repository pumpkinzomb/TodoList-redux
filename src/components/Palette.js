import React from "react";
import "./css/Palette.css"

const Color = ({color, onColor ,selected}) => {
    return (
        <span 
            className={`palette-${color} color ${selected===color? "active" :""}`} 
            onClick={(e)=>{
                e.stopPropagation();
                onColor(color);
            }}></span>
    );
}

const Palette = ({
    colors=[
        "color1", //#343a40
        "color2", //#f03e3e
        "color3", //#12b886
        "color4" //#228ae6
    ], 
    input,
    onEdit=f=>f
    }) => {    
    const onBolded = () =>{
        onEdit(input.text,input.color,!input.bolded,input.formState,input.id,input.checked);
    }
    const onColor = (color) =>{
        if(input.color !== color){
            input.color=color;
            onEdit(input.text,input.color,input.bolded,input.formState,input.id,input.checked);
        }
    }
    return(
        <div className="palette">
            {
            colors.map(color=>(
                <Color 
                    key={color}
                    color={color}
                    selected={input.color}  
                    onColor={onColor}
                />  
            ))
            }
            <div className="make-bold" 
            onClick={(e)=>{
                e.stopPropagation();
                onBolded();
            }}><img src="imgs/bold.png" alt="bold 처리하기" /></div>
        </div>
    );
}

export default Palette;