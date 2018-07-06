import React from 'react';

const RoundButton = ({ onClick, children }) => (
   <div>
     <button className='button-container' onClick={onClick}>
       <div className='button-text'>{children}</div>
     </button>
   </div>
);

export { RoundButton };