import React from 'react';
import StyledButton from '../StyledComponents/StyledComponents';

const header = (props) => {
  
  const classes = [];
  if(props.persons.length <= 2) {
    classes.push('red');
  }
  if(props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>Hi, I'm a React App!</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <StyledButton 
        alt={props.showing} 
        onClick={props.click}
      >Toggle People</StyledButton>
    </div>
  )
}

  export default header;