import React from 'react';

const person = (props) => {
  return(
    <div className='Person'>
      <h1>{props.name}</h1>
      <p>My age is {props.age}</p>
      {/* Displays the content within the <Person>props.children</Person> */}
      <p>{props.children}</p>
    </div>
  );
}

export default person;