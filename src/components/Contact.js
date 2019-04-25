import React from 'react';


function Contact(props){

  return(
    <div>
      <img src = {props.image} alt = "swamiji"/>
      <h3>Name: {props.name} </h3>
      <h4>Phone: {props.phone}</h4>
      <h5>Email: {props.email}</h5>
    </div>
  );

}

export default Contact;
