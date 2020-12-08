import React,{CSSProperties} from 'react';

const TextButton = ({
    type,
    styles,
    textView,
    onPress,
}) => {
      
      return(
        <div className="simple">
           <button type={type} onClick={onPress} style={styles} >{textView}</button>
        </div>
       )
  
}
   


export default TextButton;