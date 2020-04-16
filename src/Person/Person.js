import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 75%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return(
    <StyledDiv onClick={props.click} className='Person'>
      <h1>{props.name}</h1>
      <p>My age is {props.age}</p>
      {/* Displays the content within the <Person>props.children</Person> */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
  );
}

export default person;