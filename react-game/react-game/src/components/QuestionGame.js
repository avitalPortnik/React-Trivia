import React, { Component } from "react";
import axios from "axios";
import Question from "./Question";

class QuestionGame extends Component {
  state = {
    questions: [],
    currQuestion: 0,
    sumPoints: 0
  };

  componentDidMount() {
      this.getquestions();
  }

  getquestions=()=>{
    axios
    .get("https://opentdb.com/api.php?amount=10&type=multiple")
    .then(response => {
      const res = response.data.results; 
      this.setState({ questions: res });
      console.log(this.state.questions);
    });
  }

  resetGame=()=>{
    this.setState({
        questions : [] ,
        currQuestion: 0,
        sumPoints: 0
    });
    this.getquestions();
  }

  onChangeQuestion = (isCorrect) => {
    let point= isCorrect? 1 : 0;
    console.log("point: " + point);
    point= this.state.sumPoints + point;
    this.setState({ currQuestion: this.state.currQuestion+1 , sumPoints: point});
  };

  mixAns=(ansArr, correctAns)=>{
    let index= Math.floor(Math.random() * 4);   
    ansArr.splice( index, 0, correctAns);
    return ansArr;
  }

  render() {
    
    const quest = this.state.questions.map((q,index) => {
      return ( index===this.state.currQuestion?
      <div>  
            <Question 
                question={q.question} 
                answer= {this.mixAns(q.incorrect_answers,q.correct_answer)}
                correctAns= {q.correct_answer}
                changeQuestion={this.onChangeQuestion}/>
      </div>
      : null
      )
    });

    const newGame=
         <div> 
             <h1> Game Finished </h1>
             <h4> Your Score : {this.state.sumPoints}</h4>
             <button onClick={this.resetGame}> New Game </button>
         </div>
    
    const show= this.state.currQuestion < 10? quest : newGame ;
    return (
      <div>
        <h1>QuestionGame</h1>
        
        {show} 
        <h5> correctAnswers:   {this.state.sumPoints} </h5>
      </div>
    );
    //changeQuestion={this.onChangeQuestion}
  }
}

export default QuestionGame;
