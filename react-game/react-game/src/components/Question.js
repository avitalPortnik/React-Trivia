import React, { Component } from 'react';



class Question extends Component {

   constructor(props) {
    super(props);
    this.state = {
      ansArr: [],
      clickedAns: '',
      correct:''
    };
}
    
   nextQuestion = () =>{
       this.props.changeQuestion(this.state.clickedAns===this.props.correctAns);
   }

   clicked=(ans)=>{
        this.setState({clickedAns : ans});
   }

   checkIfCorrect=()=>{
    const correct= this.state.clickedAns===this.props.correctAns? 'Correct Answer!' : 'incorrect Answer!';
    this.setState({correct : correct});
   }

    render () {
        const displayAns= this.props.answer.map((ans)=>{
            return <button onClick={()=>this.clicked(ans)}> {ans} </button>
        })


        return (
            <div>
            <h1> {this.props.question} </h1>
            {displayAns}
            <button onClick={this.checkIfCorrect} > submit answer </button>
            <button onClick={this.nextQuestion} > Next </button>
            <h5>{this.state.correct}</h5>
            </div>
      );
     
    }
  }
  
  export default Question;