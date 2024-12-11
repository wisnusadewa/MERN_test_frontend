import React from 'react';

const Button = ({ textButton, classNameButton, onClickButton }) => {
  return (
    <div>
      <button onClick={onClickButton} className={classNameButton}>
        {textButton}
      </button>
    </div>
  );
};

export default Button;
