import React, { CSSProperties } from 'react';

var TextButton = function TextButton(_ref) {
   var type = _ref.type,
       styles = _ref.styles,
       textView = _ref.textView,
       onPress = _ref.onPress;


   return React.createElement(
      "div",
      { className: "simple" },
      React.createElement(
         "button",
         { type: type, onClick: onPress, style: styles },
         textView
      )
   );
};

export default TextButton;