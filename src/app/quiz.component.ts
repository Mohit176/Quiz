import { Component } from '@angular/core'
import   {Router} from '@angular/router'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent  {

currentQuestion: number;
question :string ;
options : [any];
id: number;
answers: any[] = [-1,-1,-1,-1, -1];
errorMessage = "";
score: string = "" ;
isHidden: boolean = true;


constructor(private router: Router){
this.currentQuestion =0;
this.question = this.quiz[this.currentQuestion].question;
this.options = this.quiz[this.currentQuestion].options;
this.id = this.quiz[this.currentQuestion].id;

}


 quiz: any[] = [
      {
        id: 1,
question: "Which is the largest country in the world by population?",
options: ['India', 'USA', 'China', 'Russia'],
answer: 'China'
    },
{
  id: 2,
question: "When did the second world war end?",
options: [1945, 1939, 1944, 1942],
 answer: 1945
},
{
id: 3,
question: "Which was the first country to issue paper currency?",
options: ['USA', 'France', 'Italy', 'China'],
 answer: 'China'
},
{
id: 4,
question: "Which city hosted the 1996 Summer Olympics?",
options: ['Atlanta', 'Sydney', 'Athens', 'Beijing'],
 answer: 'Atlanta'
},
{
  id: 5,
question: "Who invented telephone?",
options: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
 answer: 'Alexander Graham Bell'

}
    
];
    
  getValue( option)
  {
        this.answers[this.currentQuestion]= option;
  }

submitAnswer(){

  
  let currectAnswers: number = 0;

  if(this.answers[this.currentQuestion]!= -1) {

  for(var i =0 ; i < this.quiz.length; i++){
    if(this.quiz[i].answer == this.answers[i]){
      currectAnswers++;      
    }   
  }

   this.score = String((currectAnswers/this.quiz.length)*100);
this.question = "";
  this.options = null;
  this.id = 0;
  // this.router.navigate(['result'], {queryParams: {score: this.score}});
   
   console.log(this.score);
  }
  else {
    this.errorMessage= "please select the option";
  }

}

nextQuestion(){
console.log(this.answers);

if(this.answers[this.currentQuestion]!= -1) {
  this.errorMessage = "";

  console.log( this.currentQuestion + " "+ this.quiz.length);

  if(this.currentQuestion + 1 < this.quiz.length) {
  this.currentQuestion++;
  this.question = this.quiz[this.currentQuestion].question;
  this.options = this.quiz[this.currentQuestion].options;
  this.id =  this.quiz[this.currentQuestion].id;
} 
}
else {
this.errorMessage= "please select the option";
}

if(this.currentQuestion == this.quiz.length -1 ){
    this.isHidden = false;
  }



}

}
