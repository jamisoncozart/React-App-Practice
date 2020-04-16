import React from 'react';
import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return(
    <div onClick={props.click} className='Person' style={style}>
      <h1>{props.name}</h1>
      <p>My age is {props.age}</p>
      {/* Displays the content within the <Person>props.children</Person> */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Radium(person);