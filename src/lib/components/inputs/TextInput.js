import React from "react";
import "./index.css"; 




const TextInput = ({
    type = "",
    label,
    styles,
    placeholder,
    value,
    onChange,
    helpText,
    
   
}) =>{
/* */

    return (
        <div className="simple-form-group">
            {label && <label className="simple-text-label">{label}</label>}
            <input
                type={type}
                className="simple-text-input"
                value={value}
                style={styles}
                onChange={e => onChange && onChange(e.target.value)}
                placeholder={placeholder}
                
            />
            {helpText && <small className="simple-form-text">{helpText}</small>}
        </div>
    ); 
}
export default TextInput;