import React from 'react';
import Contact from './Contact';
import swamijiDetails from './KashiMathHeads';

class PropLearning extends React.Component {

  constructor(){

    super()

    this.state={
      counter: 0
    }
    this.changeCounter = this.changeCounter.bind(this)
  }

  changeCounter(){

    this.setState(previousStateValue => {
      return{
        counter : previousStateValue.counter + 1
      }}
    )
  }

  render(){

    var mathHeadDetails = swamijiDetails.map(swamiji => <Contact
    key = {swamiji.key}
    image = {swamiji.image}
    name = {swamiji.name}
    phone = {swamiji.phone}
    email = {swamiji.email} />)

    var specialText1 =""
    var specialText2 =""
    var specialText3 =""

    if(this.state.counter%5 === 0){
      specialText1 ="Congrats you clicked "
      specialText2 =" times"
      specialText3 =this.state.counter
    }


    return(
      <div>


        {mathHeadDetails}
        <hr/>
        <h4>Click the button below to change number</h4>
        <h4>{this.state.counter}</h4>
        <button onClick = {this.changeCounter}>Click Here</button>
        <h4>{specialText1 + specialText3 + specialText2}</h4>
      </div>
    );
  }

}

export default PropLearning;
